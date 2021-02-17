<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UsersRepository::class)
 */
class Users
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $Username;

    /**
     * @ORM\Column(type="text")
     */
    private $Password;

    /**
     * @ORM\Column(type="text")
     */
    private $Email;

    /**
     * @ORM\Column(type="text")
     */
    private $User_Id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $Joined;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $LastAuth;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $Hcode;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $groups;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Friends;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $pfImage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->Username;
    }

    public function setUsername(string $Username): self
    {
        $this->Username = $Username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->Password;
    }

    public function setPassword(string $Password): self
    {
        $this->Password = $Password;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): self
    {
        $this->Email = $Email;

        return $this;
    }

    public function getUserId(): ?string
    {
        return $this->User_Id;
    }

    public function setUserId(string $User_Id): self
    {
        $this->User_Id = $User_Id;

        return $this;
    }

    public function getJoined(): ?\DateTimeInterface
    {
        return $this->Joined;
    }

    public function setJoined(?\DateTimeInterface $Joined): self
    {
        $this->Joined = $Joined;

        return $this;
    }

    public function getLastAuth(): ?\DateTimeInterface
    {
        return $this->LastAuth;
    }

    public function setLastAuth(?\DateTimeInterface $LastAuth): self
    {
        $this->LastAuth = $LastAuth;

        return $this;
    }

    public function getHcode(): ?string
    {
        return $this->Hcode;
    }

    public function setHcode(string $Hcode): self
    {
        $this->Hcode = $Hcode;

        return $this;
    }

    public function getGroups(): ?string
    {
        return $this->groups;
    }

    public function setGroups(?string $groups): self
    {
        $this->groups = $groups;

        return $this;
    }

    public function getHighest(): ?int
    {
        return $this->groups;
    }

    public function getFriends(): ?string
    {
        return $this->Friends;
    }

    public function setFriends(?string $Friends): self
    {
        $this->Friends = $Friends;

        return $this;
    }

    public function getPfImage(): ?string
    {
        return $this->pfImage;
    }

    public function setPfImage(?string $pfImage): self
    {
        $this->pfImage = $pfImage;

        return $this;
    }
}
