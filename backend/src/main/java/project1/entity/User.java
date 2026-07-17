package project1.entity;
import jakarta.persistence.OneToMany;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User{
	
	public User(Long id,String fullname,String password, String phone,String role) {
		this.id=id;
		this.fullname=fullname;
		this.password=password;
		this.phone=phone;
		 this.role = role;
	}
	public User(){
		
	}
	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullname;
    }

    public void setFullName(String fullName) {
        this.fullname = fullName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    public List<Resume> getResumes() {
        return resumes;
    }

    public void setResumes(List<Resume> resumes) {
        this.resumes = resumes;
    }
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
	private String fullname;
	private String password;
	private String phone;
	private String email;
	private String linkedin;
	private String github;
	private String website;
	private String location;
	private String role;
	@OneToMany(mappedBy = "user")
	@JsonManagedReference
	private List<Resume> resumes;
}