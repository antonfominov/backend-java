package appweb.extjs.viewmodel.controller;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "trainings_table")
public class Trainings {

	public Trainings() {
	}

	@Id
	@Column(name = "id")

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "startTime")
	private String startTime;
	
	@Column(name = "time")
	private Integer time;
	
	@Column(name = "price")
	private Integer price;
	
	@Column(name = "value")
	private Integer value;
	
	@Column(name = "maxValue")
	private Integer maxValue;
	
	@Column(name = "parentName")
	private String parentName;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="trainer")
	private Trainers trainer;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admins")
	private Admins admins;
	
	@ManyToMany(mappedBy = "trainings")
    private Set<Days> days = new HashSet<>();
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "Trainings_Clients", 
        joinColumns = { @JoinColumn(name = "id_trainings") }, 
        inverseJoinColumns = { @JoinColumn(name = "id_clients") }
    )
	@OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Clients> clients = new HashSet<>();
	@PreRemove
	 private void removeListsFromMovie() {
	     getClientSet().clear();
	 }
	
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

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public Integer getTime() {
		return time;
	}

	public void setTime(Integer time) {
		this.time = time;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	@JsonIgnore
	public Trainers getTrainers() {
		return trainer;
	}

	public void setTrainers(Trainers trainers) {
		this.trainer = trainers;
	}

	@JsonIgnore
	public Admins getAdmins() {
		return admins;
	}

	public void setAdmins(Admins admins) {
		this.admins = admins;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	public Integer getMaxValue() {
		return maxValue;
	}

	public void setMaxValue(Integer maxValue) {
		this.maxValue = maxValue;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	
	public Set<Days> getDaySet() {
		return days;
	}

	public void setDaySet(Set<Days> days) {
		this.days = days;
	}
	
	@JsonIgnore
	private Set<Clients> getClientSet() {
		return clients;
	}
	
	public void setClientSet(Set<Clients> clients) {
		this.clients = clients;
	}
}
