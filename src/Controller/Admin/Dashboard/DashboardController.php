<?php

namespace App\Controller\Admin\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    /** @var SessionInterface $session */
    private $_session;

    public function __construct(SessionInterface $session)
    {
        $this->_session = $session;
    }

    /**
     * @Route("/admin/dashboard", name="admin_dashboard", defaults={"title":"Admin | Dashboard"})
     *
     * @param string $title
     *
     * @return Response
     */
    public function dashboard(string $title)
    {
        if (is_null($this->_session->get('user')))
        {
            return $this->redirectToRoute('admin_login');
        }

        $vars = array(
            'title' => $title
        );

        return $this->render('BackEnd/dashboard/dashboard.html.twig', $vars);
    }
}