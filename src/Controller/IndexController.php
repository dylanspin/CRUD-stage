<?php

namespace App\Controller;

use PhpParser\Node\Expr\Ternary;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Users;


class IndexController extends AbstractController
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
     * @Route("", name="index")
     */
    public function index(): Response
    {
        $check = $this->authCheck();
        if($check)
        {
            return $this->redirect("/main", 301);
        }else{
            return $this->redirect("/login", 301);
        }
    }

    /**
     * @Route("/login", name="login")
     */
    public function login()
    {   
        $check = $this->authCheck();
        if($check)
        {
            return $this->redirect("/main", 301);
        }else{
            return $this->render('index/login.html.twig', [
                'controller_name' => 'IndexController',
                'login' => true,
            ]);
        }
    }
    /**
     * @Route("/registeren", name="registeren")
     */
    public function register()
    {   
        $check = $this->authCheck();
        if($check)
        {
            return $this->redirect("/main", 301);
        }else{
            return $this->render('index/login.html.twig', [
                'controller_name' => 'IndexController',
                'login' => false,
            ]);
        }
    }

}
