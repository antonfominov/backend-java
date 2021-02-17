package appweb.extjs.viewmodel.controller;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

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
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="city")
	private Cities city;

	
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
}
