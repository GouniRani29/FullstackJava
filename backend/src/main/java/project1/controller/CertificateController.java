package project1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import project1.entity.Certificate;
import project1.service.CertificateService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CertificateController {

    @Autowired
    private CertificateService service;

    @GetMapping("/getallcertifications")
    public List<Certificate> getAll() {
        return service.getAllCertifications();
    }

    @GetMapping("/certification/{id}")
    public Certificate getById(@PathVariable Long id) {
        return service.getCertificationById(id);
    }

    @PostMapping("/certification/create")
    public Certificate create(@RequestBody Certificate certification) {
        return service.createCertification(certification);
    }

    @PutMapping("/certification/update")
    public Certificate update(@RequestBody Certificate certification) {
        return service.updateCertification(certification);
    }

    @DeleteMapping("/certification/delete/{id}")
    public String delete(@PathVariable Long id) {
        return service.deleteCertification(id);
    }
}