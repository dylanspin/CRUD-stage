<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Users;

class FormController extends AbstractController
{
    /**
     * @Route("/registeren/submit", name="submitRegisterForm")
    */
    public function registerForm(Request $req)
    {
        $completed = $this->CheckRegisterDB($req);
        if($completed)
        {
            return $this->render('index/main.html.twig', [
                'controller_name' => 'IndexController',
            ]);
        }else{
            return $this->render('index/login.html.twig', [
                'controller_name' => 'IndexController',
                'login' => false,
            ]);
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
            return $this->render('index/main.html.twig', [
                'controller_name' => 'IndexController',
            ]);
        }else{
            return $this->render('index/login.html.twig', [
                'controller_name' => 'IndexController',
                'login' => true,
                // moeten nog fout meldingen komen
            ]);
        }
    }

    private function CheckLoginDB(Request $req)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $account = $entityManager->getRepository(Users::class)->findOneBy(['Username' => $req->get('Username')]);
        dump($account);
        if($account)
        {
            return ($account->getPassword() == $req->get('Password'));
        }else{
            return false;
        }
    }  
    
    private function CheckRegisterDB(Request $req)
    {
        $em = $this->getDoctrine()->getManager();
        $entityManager = $this->getDoctrine()->getManager();

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
}