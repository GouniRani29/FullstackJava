package project1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project1.entity.Certificate;

@Repository
public interface CertificateRepo
        extends JpaRepository<Certificate, Long> {

}