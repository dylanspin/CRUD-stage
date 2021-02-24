<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;
use App\Entity\Groups;
use App\Entity\Chats;
use App\Entity\Message;

class FormController extends AbstractController
{

    private $session;
    private  $user;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    private function authCheck()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $auth = $this->session->get('uyshsidybcksu1893');
        $setDate = new \DateTime(date('H:i:s'));
        $this->user = $entityManager->getRepository(Users::class)->findOneBy(['User_Id' => $auth]);
        if($this->user)
        {  
            $timeDiff = date_diff($this->user->getLastAuth(),$setDate);
            if($auth)
            {
                if($timeDiff->days > 1)
                {
                    return false;
                }else{
                    return true;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    /**
     * @Route("/registeren/submit", name="submitRegisterForm")
    */
    public function registerForm(Request $req)
    {
        $completed = $this->CheckRegisterDB($req);
        if($completed)
        {
            return $this->render('index/login.html.twig', [
                'controller_name' => 'IndexController',
                'login' => true,
            ]);
            // return $this->redirect("/login", 301);
        }else{
            return $this->redirect("/registeren", 301);
        }
    }

    /**
     * @Route("/login/submit", name="submitLoginForm")
    */
    public function loginForm(Request $req)
    {
        $completed = $this->CheckLoginDB($req);
        if($completed)
        {
            return $this->redirect("/main", 301);
        }else{
            return $this->redirect("/login", 301);
        }
    }

    /**
     * @Route("/main/add", name="addFriend")
    */
    public function addFriend(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)
        {
            $added = $this->addFriendDB($req);
            if($added)
            {
                return $this->redirect("/main", 301);
            }else{
                return $this->redirect("/main/friends", 301);
            }
        }else{
            return $this->redirect("/login", 301);
        }
    }

    private function addFriendDB(Request $req)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $account = $entityManager->getRepository(Users::class)->findOneBy(['Hcode' => $req->get('search')]);
        if($account)
        {
            $newChat = new Chats();
            $entityManager->persist($newChat);
            $entityManager->flush();
            $chatId = $newChat->getId();
            $completed1 = $this->setFriendArray($account, $this->user,$chatId);
            $completed2  = $this->setFriendArray($this->user, $account,$chatId);
            return ($completed1 && $completed2);
        }else{
            return false;
        }
    }

    private function setFriendArray($person1, $person2, $chatId)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $Hcode = $person1->getHcode();
        $Hcode2 = $person2->getHcode();
        $friendArray = unserialize($person2->getFriends());
        $chatsArray = unserialize($person2->getChats());
        if(empty($friendArray)){
            if($Hcode2 != $Hcode)//so you cant add your self
            {
                $friendArray = [$Hcode];
                $chatsArray = [$chatId];
            }else{
                return false;  
            }
        }else{
            if(!in_array($Hcode,$friendArray) && $Hcode2 != $Hcode){//so you cant add people twice and add your self 
                array_push($friendArray,$Hcode);
                array_push($chatsArray,$chatId);
            }else{
                return false;
            }
        }
        $serializedFriends = serialize($friendArray);
        $serializedChats = serialize($chatsArray);
        $person2->setFriends($serializedFriends);
        $person2->setChats($serializedChats);
        $entityManager->flush();
        return true;
    }

    private function CheckLoginDB(Request $req)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $account = $entityManager->getRepository(Users::class)->findOneBy(['Username' => $req->get('Username')]);

        if($account)
        {
            if($account->getPassword() == $req->get('Password'))
            {
                $setDate = new \DateTime(date('H:i:s'));
                $em = $this->getDoctrine()->getManager();
                $account->setLastAuth($setDate);
                $em->flush();
                $this->session->set('uyshsidybcksu1893',$account->getUserId($setDate));
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }  
    
    private function CheckRegisterDB(Request $req)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $em = $this->getDoctrine()->getManager();

        $existCheck = $entityManager->getRepository(Users::class)->findOneBy(['Email' => $req->get('Email')]);
        if(!$existCheck)
        {
            $birthDate = new \DateTime($req->get('GeboorteDatum'));
            $email = $req->get('Email');
            $password = $req->get('Password');
            $username = $req->get('Username');
            $checks = array();

            //fout meldingen moeten nog gedisplayed worden
            if (strlen($password) < 8) 
            {
                array_push($checks,"Wachtwoord is tekort");
            }
            if (!preg_match("#[0-9]+#", $password)) 
            {
                array_push($checks,"Wachtwoord moet een nummer hebben");
            }
            if (!preg_match("#[a-zA-Z]+#", $password)) 
            {
                array_push($checks,"Wachtwoord moet teminste een letter hebben");
            }
            if (empty($username)) 
            {
                array_push($checks,"Geen gebruikersNaam");
            }
            if (empty($email)) 
            {
                array_push($checks,"Geen email");
            }
            if (empty($birthDate)) 
            {
                array_push($checks,"Geen GeboorteDatum");
            }
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                array_push($checks,"Geen goed email");
            }
            if(Count($checks) == 0)
            {
                $newUser = new Users();
                $newUser->setUsername($username);
                $newUser->setPassword($password);
                $newUser->setEmail($email);
                $newUser->setUserId(uniqid('CRUD'));
                $newUser->setJoined(new \DateTime(date('H:i:s')));
                $newUser->setBirthDate($birthDate);
                $em->persist($newUser);
                $em->flush();
                $this->setHrCode($newUser);   
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    private function setHrCode($newUser)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $userId = $newUser->getId();
        $newUser->setHcode(sprintf('%06d',$userId));
        $entityManager->flush();
    }

    /**
     * @Route("/settings/logout", name="Logout")
    */
    public function Logout()
    {
        $this->session->clear();  
        return $this->redirect("/login", 301);
    }

    
     /**
     * @Route("/message/Send", name="sendMessage")
    */
    public function sendMessage(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {
            if(!empty($req))
            {
                $entityManager = $this->getDoctrine()->getManager();
                $id = $req->get('chatId');
                $current = $req->get('Current');
                $text = $req->get('message');
                $chatArray = unserialize($this->user->getChats());

                if(in_array($id,$chatArray))
                {
                    $newMessage = new Message();
                    $newMessage->setChatId($id);
                    $newMessage->setContent($text);
                    $newMessage->setUserOne($this->user->getHcode());
                    $newMessage->setSend(new \DateTime(date('H:i:s')));
                    $entityManager->persist($newMessage);
                    $entityManager->flush();
                }
            }
            $this->session->set('current',$current);
            return $this->redirect("/main", 301);
        }else{
            return $this->redirect("/login", 301); 
        } 
    }

    /**
     * @Route("/settings/searchGroup", name="searchGroup")
    */
    public function searchGroup(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {   
            $groupName = $req->get('SearchGroup');//group name
            $entityManager = $this->getDoctrine()->getManager();
            $findGroup = $entityManager->getRepository(Groups::class)->findOneBy(['name' => $groupName]);
            if($findGroup)
            {
                $currentGroups = unserialize($this->user->getGroups());
                if(empty($currentGroups) || !in_array($groupName,$currentGroups))
                {
                    $members = unserialize($findGroup->getMembers());
                    $perms = unserialize($findGroup->getPermisions());

                    array_push($members,$this->user->getHcode());
                    array_push($perms,0);
                    array_push($currentGroups,$groupName);

                    $this->user->setGroups(serialize($currentGroups));
                    $findGroup->setMembers(serialize($members));
                    $findGroup->setPermisions(serialize($perms));

                    $entityManager->flush();
                }
            }
            return $this->redirect("/main", 301);
        }else{
            return $this->redirect("/login", 301); 
        }
    }

    /**
     * @Route("/settings/creatGroup", name="creatGroup")
    */
    public function creatGroup(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {   
            $groupName = $req->get('Group');//group name
            $entityManager = $this->getDoctrine()->getManager();
            $existCheck = $entityManager->getRepository(Groups::class)->findOneBy(['name' => $groupName]);
            if(!$existCheck)
            {
                $currentGroups = unserialize($this->user->getGroups());
                if(empty($currentGroups) || !in_array($groupName,$currentGroups))//als de user er niet al in zit of als de de array empty is
                {
                    dump("test");
                    if(empty($currentGroups))
                    {
                        $currentGroups = [$groupName];
                    }else{
                        array_push($currentGroups,$groupName);
                    }

                    $this->user->setGroups(serialize($currentGroups));
                    $entityManager->flush();

                    $members = [$this->user->getHcode()];//sets you as first member and have level 3 permision
                    $perm = [3];
                    $chats = ["Text Channel"];//first textChat name
                    
                    $newGroup = new Groups();
                    $newGroup->setName($groupName);
                    $newGroup->setCreated(new \DateTime(date('H:i:s')));
                    $newGroup->setMembers(serialize(($members)));
                    $newGroup->setPermisions(serialize(($perm)));
                    $newGroup->setChats(serialize(($chats)));
                    $entityManager->persist($newGroup);
                    $entityManager->flush();
                }
            }else{
                //moet nog een melding komen van dat de group all bestaat
            }
            return $this->redirect("/main", 301);
        }else{
            return $this->redirect("/login", 301); 
        }
    }

    /**
     * @Route("/settings/changePf", name="changePf")
    */
    public function changePf(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {   
            $newImage = $req->files->get('newImage');
            if(!empty($newImage))
            {
                $entityManager = $this->getDoctrine()->getManager();
                $uploadDirectory = $this->getParameter('uploads_directory'); //folder where the pfImage is saved
                $nameImage = uniqid().'.'.$newImage->guessExtension();
                $oldImage = $this->user->getPfImage();
                $newImage->move(
                    $uploadDirectory,
                    $nameImage
                );

                $this->user->setPfImage($nameImage);
                $entityManager->flush();
                if(!empty($oldImage))
                {
                    dump($uploadDirectory."/".$oldImage);
                    unlink($uploadDirectory."/".$oldImage);
                }
            }
            return $this->redirect("/settings", 301);
        }else{
            return $this->redirect("/login", 301); 
        }
    }

    /**
     * @Route("/settings/newUsername", name="newUsername")
    */
    public function newUsername(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {   
            $username = $req->get('Username');
            if(!empty($username))//check if username is not empty
            {
                $entityManager = $this->getDoctrine()->getManager();
                $this->user->setUsername($username);
                $entityManager->flush();
            }
            return $this->redirect("/settings", 301);
        }else{
            return $this->redirect("/login", 301); 
        }
    }

    /**
     * @Route("/settings/newEmail", name="newEmail")
    */
    public function newEmail(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {   
            $email = $req->get('email');
            if(!empty($email))//check if not empty
            {
                $entityManager = $this->getDoctrine()->getManager();
                $existCheck = $entityManager->getRepository(Users::class)->findOneBy(['Email' => $email]);
                if(!$existCheck)//check if email exist
                {
                    if(filter_var($email, FILTER_VALIDATE_EMAIL))//check if email is valid
                    {
                        $this->user->setEmail($email);
                        $entityManager->flush();
                    }
                }
            }
            return $this->redirect("/settings", 301);
        }else{
            return $this->redirect("/login", 301);
        }
    }

    /**
     * @Route("/settings/newPassword", name="newPassword")
    */
    public function updateWachtwoord(Request $req)
    {
        $completed = $this->authCheck();
        if($completed)//check auth
        {
            $oldPassword = $req->get('oldPassword');
            $password1 = $req->get('password1');
            $password2 = $req->get('password2');
            if($this->user->getPassword() == $oldPassword)//checks if old password is correct
            {
                if(Count($this->checkPassword($password1)) == 0)//checks if the new password is strong enough
                {
                    if($password1 == $password2)//checks if the 2 passwords are the same
                    {
                        $entityManager = $this->getDoctrine()->getManager();
                        $this->user->setPassword($password1);
                        $entityManager->flush();
                    }
                }
            }
            return $this->redirect("/settings", 301);
        }else{
            return $this->redirect("/login", 301);
        }
    }


    private function checkPassword($password)
    {
        $checks = array();
        if (strlen($password) < 8) 
        {
            array_push($checks,"Wachtwoord is tekort");
        }
        if (!preg_match("#[0-9]+#", $password)) 
        {
            array_push($checks,"Wachtwoord moet een nummer hebben");
        }
        if (!preg_match("#[a-zA-Z]+#", $password)) 
        {
            array_push($checks,"Wachtwoord moet teminste een letter hebben");
        } 
        return $checks;
    }

    /**
     * @Route("/settings/delete", name="deleteAccount")
    */
    public function deleteAccount()
    {
        //kwam er later achter dat ik CASCADE manier kon gebruiken als ik een extra frienden table had
        $completed = $this->authCheck();
        if($completed)//check auth
        {
            $myArray = unserialize($this->user->getFriends());
            $entityManager = $this->getDoctrine()->getManager();
            $myHCode = $this->user->getHcode();
            if(!empty($myArray))//checks if the user has friends
            {
                for($i=0; $i<Count($myArray); $i++)
                {
                    $friend = $entityManager->getRepository(Users::class)->findOneBy(['Hcode' => $myArray[$i]]);
                    if($friend)//double check if friend exist
                    {
                        $friendArray = Unserialize($friend->getFriends());
                        $ChatArray = Unserialize($friend->getChats());
                        $key = array_search($myHCode, $friendArray);

                        $repository = $this->getDoctrine()->getRepository(Message::class);
                        $messages = $repository->findBy(
                            ['chatId' => $ChatArray[$key]]
                        );
                        
                        for($b=0; $b<Count($messages); $b++)
                        {
                            if($messages[$b])
                            {
                                $entityManager->remove($messages[$b]);//deletes message 
                                $entityManager->flush();
                            }
                        }
                        
                        $chat = $entityManager->getRepository(Chats::class)->findOneBy(['id' => $ChatArray[$key]]);
                        $entityManager->remove($chat);//deletes chat 
                        $entityManager->flush();

                        unset($friendArray[$key]);
                        unset($ChatArray[$key]);
                        $friend->setFriends(serialize($friendArray));
                        $friend->setChats(serialize($ChatArray));
                        $entityManager->flush();//the user is removed from the friend friendslist 

                    }
                }
            }
            
            $entityManager->remove($this->user);//deletes user 
            $entityManager->flush();
            $this->session->clear(); 
            return $this->redirect("/registeren", 301);
        }else{
            return $this->redirect("/login", 301);
        }
    }
}