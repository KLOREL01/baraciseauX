<?php

namespace App\Controller\Admin\Pages;

use App\Entity\Page;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class PagesController extends AbstractController
{
    /** @var SessionInterface $session */
    private $_session;

    private $_em;

    public function __construct(SessionInterface $session, EntityManagerInterface $em)
    {
        $this->_session = $session;
        $this->_em = $em;
    }

    /**
     * @Route("/admin/all-pages", name="admin_all_pages", defaults={"title":"Admin | Toutes les pages"})
     *
     * @param string $title
     *
     * @return Response
     */
    public function allPages(string $title)
    {
        if (is_null($this->_session->get('user')))
        {
            return $this->redirectToRoute('admin_login');
        }

        $pages = $this->_em->getRepository(Page::class)->findAll();

        $head = [
            'Titre',
            'Url',
            'MetaIndex',
            'MetaFollow'
        ];

        $columns = [
          'title',
          'url',
          'metaIndex',
          'metaFollow'
        ];

        $vars = array(
            'title' => $title,
            'head' => $head,
            'rows' => $pages,
            'columns' => $columns
        );

        return $this->render('BackEnd/pages/all_pages.html.twig', $vars);
    }

    /**
     * @Route("/admin/page/{id}", name="admin_modifier_page", defaults={"title": "Admin | Modifier la page"}, methods={"GET"})
     *
     * @param string $title
     *
     * @return Response
     */
    public function modifierPage(string $title, int $id)
    {
        if (is_null($this->_session->get('user')))
        {
            return $this->redirectToRoute('admin_login');
        }

        $page = $this->_em->getRepository(Page::class)->findOneBy(['id' => $id]);

        $vars = array(
            'title' => $title,
            'page' => $page
        );


        return $this->render('BackEnd/pages/modifier_page.html.twig', $vars);
    }
}