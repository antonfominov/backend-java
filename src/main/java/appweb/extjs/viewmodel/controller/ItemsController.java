package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;

import appweb.extjs.repository.ItemsRepository;
import appweb.extjs.repository.PartRepository;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class ItemsController{

@Autowired
private ItemsRepository itemsRepository;

@Autowired
private PartRepository partRepository;

@GetMapping ("/items")
	public List<Items> getAll(){
	 return (List<Items>) itemsRepository.findAll();
}


/*
 * @GetMapping("/items/{partid}") public
 * List<Items>getItemByPartid(@PathVariable("partid") Integer partid){ return
 * itemsRepository.findByPartid(partid); }
 */
 
  @PostMapping ("/createItem")
  public Boolean create(@RequestParam String name, @RequestParam Integer partid) {
	Part part = partRepository.findById(partid).orElse(new Part());
  	Items yolo = new Items();
  	yolo.setName(name);
  	yolo.setPart(part);
  	itemsRepository.save(yolo);
  	return true;
   }
  
  @PutMapping ("/updateItem")
	public Boolean updateItem(@RequestParam Integer id, @RequestParam String name) {
	Items items = itemsRepository.findById(id).orElse(new Items());
	items.setName(name);
	itemsRepository.save(items);
	return true;
}
  
  @PostMapping ("/items/")
	public void deleteItems(@RequestParam Integer id) {
	itemsRepository.deleteById(id);
}
}