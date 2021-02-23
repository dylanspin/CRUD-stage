<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Users;
use App\Entity\Groups;

class UserController extends AbstractController
{

    private $session;
    private $userInfo;
    private $userImage;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    //moet uit zoeken hoe ik deze functie kan gebruiken over meerdere controllers classes
    private function authCheck()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $auth = $this->session->get('uyshsidybcksu1893');
        $setDate = new \DateTime(date('H:i:s'));
        $account = $entityManager->getRepository(Users::class)->findOneBy(['User_Id' => $auth]);
        
        if($account)
        {
            $this->userInfo = $account;
            if(empty($account->getPfImage()))
            {
                $this->userImage = "noImage.png";
            }else{
                $this->userImage = $account->getPfImage();
            }
            $timeDiff = date_diff($account->getLastAuth(),$setDate);
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

    //////dit kan nog anders korter moet nog 
    /**
     * @Route("/main", name="main")
    */
    public function main()
    {   
        $check = $this->authCheck();
        if($check)
        {
            return $this->render('index/main.html.twig', [
                'controller_name' => 'IndexController',
                'name' => $this->userInfo->getUsername(),
                'HCode' => $this->userInfo->getHcode(),
                'contactPage' => '0',
                'friends' => $this->getFriendInfo(),
                'groups' => $this->getGroups(),
                'pf' => $this->userImage,
            ]);
        }else{
            return $this->redirect("/login", 301);
        }
    }

    /**
     * @Route("/main/friends", name="mainFriendsList")
    */
    public function mainFriendsList()
    {   
        $check = $this->authCheck();
        if($check)
        {
            return $this->render('index/main.html.twig', [
                'controller_name' => 'IndexController',
                'name' => $this->userInfo->getUsername(),
                'HCode' => $this->userInfo->getHcode(),
                'contactPage' => '1',
                'friends' => $this->getFriendInfo(),
                'groups' => $this->getGroups(),
                'pf' => $this->userImage,
            ]);
        }else{
            return $this->redirect("/login", 301);
        }
    }

    private function getFriendInfo()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $serializedFriends = $this->userInfo->getFriends();
        if(empty($serializedFriends))
        {
            dump("no friends");
            return null;
        }else{
            $friends = unserialize($serializedFriends);
            $friendNames = array();
            for($i=0; $i<Count($friends); $i++)
            {
                $friend = $entityManager->getRepository(Users::class)->findOneBy(['Hcode' => $friends[$i]]);
                if(empty($friend->getPfImage()))
                {
                    $image = "noImage.png";
                }else{
                    $image = $friend->getPfImage();
                }
                array_push($friendNames,
                    [$friend->getUsername(),$image]
                );
            }
            return $friendNames;
        }
    }

    private function getGroups()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $serializedGroups = $this->userInfo->getGroups();
        if(empty($serializedGroups))
        {
            dump("no friends");
            return null;
        }else{
            $Groups = unserialize($serializedGroups);
            $groupsList = array();
            for($i=0; $i<Count($Groups); $i++)
            {
                $group = $entityManager->getRepository(Groups::class)->findOneBy(['name' => $Groups[$i]]);
                if(empty($group->getImage()))
                {
                    $image = null;
                }else{
                    $image = $group->getImage();
                }
                array_push($groupsList,
                    [$group->getName(),$image]
                );
            }
            return $groupsList;
        }
    }


    /**
     * @Route("/settings", name="settings")
    */
    public function settings()
    {   
        $check = $this->authCheck();
        if($check)
        {
            return $this->render('index/settings.html.twig', [
                'controller_name' => 'IndexController',
                'name' => $this->userInfo->getUsername(),
                'hCode' => $this->userInfo->getHcode(),
                'mail' => $this->userInfo->getEmail(),
                'pf' => $this->userImage,
            ]);
        }else{
            return $this->redirect("/login", 301);
        }
    }
}
