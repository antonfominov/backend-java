package appweb.extjs.viewmodel.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Parent;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "days_table")
public class Days {

	public Days() {
	}

	@Id
	@Column(name = "id")

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "number")
	private Integer number;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admin")
	private Admins admins;
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "Days_Trainings", 
        joinColumns = { @JoinColumn(name = "id_days") }, 
        inverseJoinColumns = { @JoinColumn(name = "id_trainings") }
    )
	@OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Trainings> trainings = new HashSet<>();
	@PreRemove
	 private void removeListsFromMovie() {
	     getTrainings().clear();
	 }
	
	@ManyToMany(mappedBy = "days")
    private Set<Clubs> clubs = new HashSet<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	@JsonIgnore
	public Admins getAdmins() {
		return admins;
	}

	public void setAdmins(Admins admins) {
		this.admins = admins;
	}
	
	@JsonIgnore
	public Set<Clubs> getClubSet() {
		return clubs;
	}

	public void setClubSet(Set<Clubs> clubs) {
		this.clubs = clubs;
	}

	public Set<Trainings> getTrainings() {
		return trainings;
	}

	public void setTrainings(Set<Trainings> trainings) {
		this.trainings = trainings;
	}
}
