<?php

namespace App\Controller\Front\Index;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     *
     * @return Response
     */
    public function index()
    {
        $var = array(
            'title' => 'Bar à ciseaux | Home'
        );

        return $this->render('FrontEnd/index/index.html.twig', $var);
    }
}