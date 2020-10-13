<?php

namespace App\Controller\Shop;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ShopController extends AbstractController
{
    /**
     * @Route("/shop", name="app_shop")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function shop()
    {
        $vars = array(
            'title' => 'Bar à ciseaux | Shop'
        );

        return $this->render('FrontEnd/shop/shop.html.twig', $vars);
    }
}