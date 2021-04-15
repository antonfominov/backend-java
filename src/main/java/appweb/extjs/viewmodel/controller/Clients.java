package appweb.extjs.viewmodel.controller;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.Type;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "clients_table")
public class Clients {

	public Clients() {
	}

	@Id
	@Column(name = "id")

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name = "firstName") //»Ãﬂ
	private String firstName;
	
	@Column(name = "secondName") //‘¿Ã»À»ﬂ
	private String secondName;
	
	@Column(name = "lastName") //Œ“◊≈—“¬Œ
	private String lastName;
	
	@Column(name = "birthday")
	@Type(type="date")
	private Date birthday;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "parentName")
	private String parentName;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admins")
	private Admins admins;
	
	@ManyToMany(mappedBy = "clients")
    private Set<Trainings> trainings = new HashSet<>();
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="clubs")
	private Clubs clubs;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@JsonIgnore
	public Clubs getClubs() {
		return clubs;
	}

	public void setClub(Clubs clubs) {
		this.clubs = clubs;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	@JsonIgnore
	public Admins getAdmins() {
		return admins;
	}

	public void setAdmins(Admins admins) {
		this.admins = admins;
	}
	
	public Set<Trainings> getTrainingSet() {
		return trainings;
	}

	public void setTrainingSet(Set<Trainings> trainings) {
		this.trainings = trainings;
	}
	
}
