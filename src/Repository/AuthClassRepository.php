<?php

namespace App\Repository;

use App\Entity\AuthClass;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AuthClass|null find($id, $lockMode = null, $lockVersion = null)
 * @method AuthClass|null findOneBy(array $criteria, array $orderBy = null)
 * @method AuthClass[]    findAll()
 * @method AuthClass[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AuthClassRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AuthClass::class);
    }

    // /**
    //  * @return AuthClass[] Returns an array of AuthClass objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AuthClass
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
