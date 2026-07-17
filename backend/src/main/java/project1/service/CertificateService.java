package project1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project1.entity.Certificate;
import project1.repository.CertificateRepo;

@Service
public class CertificateService {

    @Autowired
    private CertificateRepo repository;

    public List<Certificate> getAllCertifications() {
        return repository.findAll();
    }

    public Certificate getCertificationById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Certificate createCertification(Certificate certification) {
        return repository.save(certification);
    }

    public Certificate updateCertification(Certificate certification) {
        return repository.save(certification);
    }

    public String deleteCertification(Long id) {
        repository.deleteById(id);
        return "Certification Deleted Successfully";
    }
}