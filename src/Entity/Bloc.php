<?php

namespace App\Entity;

use App\Repository\BlocRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BlocRepository::class)
 */
class Bloc
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $zone;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $text_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $background_img_name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getZone(): ?string
    {
        return $this->zone;
    }

    public function setZone(string $zone): self
    {
        $this->zone = $zone;

        return $this;
    }

    public function getTitleId(): ?string
    {
        return $this->title_id;
    }

    public function setTitleId(string $title_id): self
    {
        $this->title_id = $title_id;

        return $this;
    }

    public function getTextId(): ?string
    {
        return $this->text_id;
    }

    public function setTextId(string $text_id): self
    {
        $this->text_id = $text_id;

        return $this;
    }

    public function getBackgroundImgName(): ?string
    {
        return $this->background_img_name;
    }

    public function setBackgroundImgName(string $background_img_name): self
    {
        $this->background_img_name = $background_img_name;

        return $this;
    }
}
