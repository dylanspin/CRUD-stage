<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }

    /**
     * @Route("/login", name="login")
     */
    public function login()
    {   
        return $this->render('index/login.html.twig', [
            'controller_name' => 'IndexController',
            'login' => true,
        ]);
    }
    /**
     * @Route("/registeren", name="registeren")
     */
    public function register()
    {   
        return $this->render('index/login.html.twig', [
            'controller_name' => 'IndexController',
            'login' => false,
        ]);
    }
}