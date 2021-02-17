package appweb.extjs.viewmodel.controller;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="part")
public class Part {
	
	public Part() {}
	@Id
	@Column(name = "id")
	
	
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Integer id;


	@Column(name = "name")
	private String name;
	
	
	@Column(name = "items")
	@OneToMany(mappedBy="part", cascade = CascadeType.ALL)
	private List<Items> items;
	

    public Integer getId() {
    	return id;
    }
          
    public String getName() {
    	return name;
    }
    

	  public List<Items> getItems() { 
		  return items; 
		  }
	 
	public void setId(Integer id) {
	    	this.id = id;
	    }
	  
    public void setName(String name) {
    	this.name = name;
    }
    	
	  public void setItems(List<Items> items) {
		this.items = items;
	}

	 
}
