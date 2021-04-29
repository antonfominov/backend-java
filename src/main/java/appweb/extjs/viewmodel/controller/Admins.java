package appweb.extjs.viewmodel.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="admins_table")
public class Admins {

    public Admins() {}
    
    @Id
    @Column(name = "id")
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    @Column(name = "firstName")
    private String firstName;
    
    @Column(name = "secondName")
    private String secondName;
    
    @Column(name = "lastName")
    private String lastName;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;
    
    @Column(name = "role")
    private String role;
    
    @Column(name = "cities")
    @OneToMany(mappedBy="admins", cascade = CascadeType.ALL)
    private List<Cities> cities;
    
    @Column(name = "users")
    @OneToMany(mappedBy="admins", cascade = CascadeType.ALL)
    private List<Users> users;
    
    @Column(name = "clubs")
    @OneToMany(mappedBy="admins", cascade = CascadeType.ALL)
    private List<Clubs> clubs;
    
    @Column(name = "trainers")
    @OneToMany(mappedBy="admins", cascade = CascadeType.ALL)
    private List<Trainers> trainers;
    
    @Column(name = "trainings")
    @OneToMany(mappedBy="admins", cascade = CascadeType.ALL)
    private List<Trainings> trainings;
    
    @Column(name = "clients")
    @OneToMany(mappedBy="admins", cascade = CascadeType.ALL)
    private List<Clients> clients;

    public Integer getId() {
        return id;
    }

    public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSecondName() {
		return secondName;
	}

	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public List<Cities> getCities(){
    	return cities;
    }
    
    public void setCities(List<Cities> cities) {
    	this.cities = cities;
    }
    
    public List<Users> getUsers(){
    	return users;
    }
    
    public void setUsers(List<Users> users) {
    	this.users = users;
    }

	public List<Clubs> getClubs() {
		return clubs;
	}

	public void setClubs(List<Clubs> clubs) {
		this.clubs = clubs;
	}

	public List<Trainers> getTrainers() {
		return trainers;
	}

	public void setTrainers(List<Trainers> trainers) {
		this.trainers = trainers;
	}

	public List<Trainings> getTrainings() {
		return trainings;
	}

	public void setTrainings(List<Trainings> trainings) {
		this.trainings = trainings;
	}

	public List<Clients> getClients() {
		return clients;
	}

	public void setClients(List<Clients> clients) {
		this.clients = clients;
	}
	
}