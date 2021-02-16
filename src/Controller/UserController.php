<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Users;

class UserController extends AbstractController
{

    private $session;
    private $userInfo;

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
                'contactPage' => '0',
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
                'contactPage' => '1',
            ]);
        }else{
            return $this->redirect("/login", 301);
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
            ]);
        }else{
            return $this->redirect("/login", 301);
        }
    }
}
