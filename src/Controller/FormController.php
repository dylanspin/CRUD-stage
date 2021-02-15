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

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    private function authCheck()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $auth = $this->session->get('uyshsidybcksu1893');
        $setDate = new \DateTime(date('H:i:s'));
        $account = $entityManager->getRepository(Users::class)->findOneBy(['User_Id' => $auth]);
        dump(date_diff($account->getLastAuth(),$setDate));
        // dump($account->getLastAuth());
        if($auth)
        {
            return true;
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
            return true;
        }else{
            return false;
        }
    }

    private function Logout()
    {

    }
}