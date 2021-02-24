<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $chatId;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $userOne;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $userTwo;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Content;

    /**
     * @ORM\Column(type="datetime")
     */
    private $send;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChatId(): ?int
    {
        return $this->chatId;
    }

    public function setChatId(?int $chatId): self
    {
        $this->chatId = $chatId;

        return $this;
    }

    public function getUserOne(): ?string
    {
        return $this->userOne;
    }

    public function setUserOne(?string $userOne): self
    {
        $this->userOne = $userOne;

        return $this;
    }

    public function getUserTwo(): ?string
    {
        return $this->userTwo;
    }

    public function setUserTwo(?string $userTwo): self
    {
        $this->userTwo = $userTwo;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->Content;
    }

    public function setContent(?string $Content): self
    {
        $this->Content = $Content;

        return $this;
    }

    public function getSend(): ?\DateTimeInterface
    {
        return $this->send;
    }

    public function setSend(\DateTimeInterface $send): self
    {
        $this->send = $send;

        return $this;
    }
}
