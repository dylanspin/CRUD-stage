<?php

namespace App\Repository;

use App\Entity\Chats;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Chats|null find($id, $lockMode = null, $lockVersion = null)
 * @method Chats|null findOneBy(array $criteria, array $orderBy = null)
 * @method Chats[]    findAll()
 * @method Chats[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChatsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Chats::class);
    }

    // /**
    //  * @return Chats[] Returns an array of Chats objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Chats
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
