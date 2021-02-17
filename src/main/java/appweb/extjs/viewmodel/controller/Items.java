package appweb.extjs.viewmodel.controller;

import java.util.List;
import java.util.Set;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="items")
public class Items {
	public Items() {}

	@Id
	@Column(name = "id")
	
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Integer id;
	
	@Column(name = "name")
	private String name;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="partid")
	private Part part;
	

	 public Integer getId() {
	    	return id;
	    }
	          
	 public String getName() {
	    	return name;
	    }
	 
	 public void setId(Integer id){
	    	this.id = id;
	    }
	 
	    public void setName( String name) {
	    	this.name = name;
	    }
	    
	    public void setPart(Part part) {
			  this.part = part;
		  }
	
	  @JsonIgnore
	  public Part getPart() {
		  return part;
	  }
	  
		
		 public Part setPart() {
			 return part;
	}
		
	 
}
