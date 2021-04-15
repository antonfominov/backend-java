package appweb.extjs.viewmodel.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Parent;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Shedule {

	public Shedule() {
	}

	private String name;
	
	private String adress;
	
	private String openTime;
	
	private String closeTime;
	
	private String parentName;

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

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public void setOpenTime(String openTime) {
		this.openTime = openTime;
	}

	public void setCloseTime(String closeTime) {
		this.closeTime = closeTime;
	}
    
    public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
}
