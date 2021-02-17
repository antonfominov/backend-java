package appweb.extjs.viewmodel.controller;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="label")
public class Label {
	public Label() {}
	
	@Id
	@Column(name = "id")
	
	
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Integer id;
	
	@Column(name = "header")
	private String header;
	
	@Column(name = "footer")
	private String footer;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getHeader() {
		return header;
	}

	public void setHeader(String header) {
		this.header = header;
	}

	public String getFooter() {
		return footer;
	}

	public void setFooter(String footer) {
		this.footer = footer;
	}
	
	

}
