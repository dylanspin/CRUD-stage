<?php

namespace App\Entity;

use App\Repository\ChatsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ChatsRepository::class)
 */
class Chats
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
    private $LastMessageId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastMessageId(): ?int
    {
        return $this->LastMessageId;
    }

    public function setLastMessageId(?int $LastMessageId): self
    {
        $this->LastMessageId = $LastMessageId;

        return $this;
    }
}
