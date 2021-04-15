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
@Table(name = "clubs_table")
public class Clubs {

	public Clubs() {
	}

	@Id
	@Column(name = "id")

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "adress")
	private String adress;
	
	@Column(name = "openTime")
	private String openTime;
	
	@Column(name = "closeTime")
	private String closeTime;
	
	@Column(name = "parentName")
	private String parentName;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="city")
	private Cities city;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admin")
	private Admins admins;
	
	@Column(name = "trainers")
    @OneToMany(mappedBy="clubs", cascade = CascadeType.ALL)
    private List<Trainers> trainers;
	
	@Column(name = "clients")
    @OneToMany(mappedBy="clubs", cascade = CascadeType.ALL)
    private List<Clients> clients;
	
	@ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "Clubs_Days", 
        joinColumns = { @JoinColumn(name = "id_clubs") }, 
        inverseJoinColumns = { @JoinColumn(name = "id_days") }
    )
	@OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Days> days = new HashSet<>();
	@PreRemove
	 private void removeListsFromMovie() {
	     getDaySet().clear();
	 }
	
	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	public String getAdress() {
		return adress;
	}
	
	public String getOpenTime() {
		return openTime;
	}
	
	public String getCloseTime() {
		return closeTime;
	}
	
	@JsonIgnore
	public Cities getCity() {
		return city;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}

	public void setCloseTime(String closeTime) {
		this.closeTime = closeTime;
	}

	public void setCity(Cities city) {
		this.city = city;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@JsonIgnore
	public Admins getAdmins() {
		return admins;
	}

	public void setAdmins(Admins admins) {
		this.admins = admins;
	}
	
	public List<Trainers> getTrainers(){
    	return trainers;
    }
    
    public void setTrainers(List<Trainers> trainers) {
    	this.trainers = trainers;
    }
    
    public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	@JsonIgnore
	public Set<Days> getDaySet() {
		return days;
	}

	public void setDaySet(Set<Days> days) {
		this.days = days;
	}

	public List<Clients> getClients() {
		return clients;
	}

	public void setClients(List<Clients> clients) {
		this.clients = clients;
	}
}
