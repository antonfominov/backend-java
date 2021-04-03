package appweb.extjs.viewmodel.controller;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cities_table")
public class Cities {

	public Cities() {
	}

	@Id
	@Column(name = "id")

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "clubs")
	@OneToMany(mappedBy="city", cascade = CascadeType.ALL)
	private List<Clubs> clubs;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="admins")
	private Admins admins;

	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<Clubs> getClubs() { 
		return clubs; 
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setClubs(List<Clubs> clubs) { 
		this.clubs = clubs;
	}
	
	@JsonIgnore
	public Admins getAdmin() {
		return admins;
	}
	
	public void setAdmin(Admins admins) {
		this.admins = admins;
	}

}
