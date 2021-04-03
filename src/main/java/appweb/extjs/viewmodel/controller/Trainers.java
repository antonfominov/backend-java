package appweb.extjs.viewmodel.controller;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "trainers_table")
public class Trainers {

	public Trainers() {
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
	
	@Column(name = "price")
	private Integer price;
	
	@Column(name = "parentName")
	private String parentName;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="clubs")
	private Clubs clubs;
	
	@Column(name = "trainings")
    @OneToMany(mappedBy="trainer", cascade = CascadeType.ALL)
    private List<Trainings> trainings;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admins")
	private Admins admins;
	
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

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	@JsonIgnore
	public Clubs getClubs() {
		return clubs;
	}

	public void setClubs(Clubs clubs) {
		this.clubs = clubs;
	}

	@JsonIgnore
	public Admins getAdmins() {
		return admins;
	}

	public void setAdmins(Admins admins) {
		this.admins = admins;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	public List<Trainings> getTrainings() {
		return trainings;
	}

	public void setTrainings(List<Trainings> trainings) {
		this.trainings = trainings;
	}
}
