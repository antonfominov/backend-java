package appweb.extjs.viewmodel.controller;

import javax.persistence.*;

@Entity
@Table(name="books_table")
public class Grid {
	
	public Grid() {}
	@Id
	@Column(name = "id")
	
	
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Integer id;

	    @Column(name = "name")
	    private String part;

	    @Column(name = "items")
	    private String items;

    public long getId() {
    	return id;
    }
        
    public String getPart() {
    	return part;
    }
      
    public String getItems() {
    	return items;
    }
        
///    
    
    public long setId(){
    	return id;
    }

    
    public String setPart() {
    	return part;
    }
    
    public String setItems() {
    	return items;
    }
        
}


