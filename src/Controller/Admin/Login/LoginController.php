<?php

namespace App\Controller\Admin\Login;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonDecode;

class LoginController extends AbstractController
{
    /** @var SessionInterface $session */
    private $session;

    public function __construct(SessionInterface $session)
    {
        $this->session = $session;
    }

    /**
     * @Route("/admin", name="admin_login", defaults={"title": "Admin | Login"})
     *
     * @param string $title
     *
     * @return Response
     */
    public function index(string $title)
    {
        $vars = array(
            'title' => $title
        );

        return $this->render('BackEnd/login/login.html.twig', $vars);
    }

    /**
     * @Route("/admin/api/login", name="admin_api_login", methods={"POST"}, options={"expose"=true})
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        if (!$request->isXmlHttpRequest())
        {
            throw new AccessDeniedException();
        }

        $jsonDecode = new JsonDecode();

        $data = $jsonDecode->decode($request->getContent(), 'json');
        $data->mail = htmlspecialchars($data->mail);
        $data->password = htmlspecialchars($data->password);

        $entityManager = $this->getDoctrine()->getManager();

        $rU = $entityManager->getRepository(User::class);

        $user = $rU->findOneBy(['mail' => $data->mail , 'password' => $data->password]);

        if (!is_null($user))
        {
            $this->session->set('user', $user);
            return new JsonResponse(['status' => true, 'message' => 'It\'s OK'], 200);
        }
        else
        {
            return new JsonResponse(['status' => false, 'message' => 'Erreur'], 200);
        }
    }
}