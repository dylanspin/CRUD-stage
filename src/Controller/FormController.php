<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;

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
            return $this->redirect("/main", 301);
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
        $completed = $this->authCheck($req);
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
            $completed1 = $this->setFriendArray($account, $this->user);
            $completed2  = $this->setFriendArray($this->user, $account);
            return ($completed1 && $completed2);
        }else{
            return false;
        }
    }

    private function setFriendArray($person1, $person2)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $Hcode = $person1->getHcode();
        $Hcode2 = $person2->getHcode();
        $friendArray = unserialize($person2->getFriends());
        if(empty($friendArray)){
            if($Hcode2 != $Hcode)//so you cant add your self
            {
                $friendArray = [$Hcode];
            }else{
                return false;  
            }
        }else{
            if(!in_array($Hcode,$friendArray) && $Hcode2 != $Hcode){//so you cant add people twice and add your self 
                array_push($friendArray,$Hcode);
            }else{
                return false;
            }
        }
        $serializedArray = serialize($friendArray);
        $person2->setFriends($serializedArray);
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
            $newUser = new Users();
            $newUser->setUsername($req->get('Username'));
            $newUser->setPassword($req->get('Password'));
            $newUser->setEmail($req->get('Email'));
            $newUser->setUserId(uniqid('CRUD'));
            $newUser->setJoined(new \DateTime(date('H:i:s')));
            
            $em->persist($newUser);
            $em->flush();
            $this->setHrCode($newUser);
            return true;
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
     * @Route("/settings/delete", name="deleteAccount")
    */
    public function deleteAccount()
    {
        $this->session->clear(); 
        //delete user row and remove from the current users friends
        
        return $this->redirect("/registeren", 301);
    }
}