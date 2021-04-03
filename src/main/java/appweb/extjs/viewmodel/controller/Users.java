package appweb.extjs.viewmodel.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="users_table")
public class Users {

    public Users() {}
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
    
    @ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admins")
	private Admins admins;

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
    
    @JsonIgnore
	public Admins getAdmin() {
		return admins;
	}
	
	public void setAdmin(Admins admins) {
		this.admins = admins;
	}
}
