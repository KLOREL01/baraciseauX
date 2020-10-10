<?php

namespace App\Controller\Index;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        $var = array(
            'title' => 'Bar à ciseaux'
        );

        return $this->render('FrontEnd/index/index.html.twig', $var);
    }
}