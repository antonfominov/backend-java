package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import appweb.extjs.repository.ItemsRepository;
import appweb.extjs.repository.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController

public class PartController{

@Autowired
private PartRepository partRepository;

@GetMapping ("/part")
	public List<Part> getAll(){
	 return (List<Part>) partRepository.findAll();
}

@GetMapping("/part/{Id}")
	public Optional<Part> getPartById(@PathVariable("Id") int id) {
	return partRepository.findById(id);
}

@PostMapping ("/create")
public Boolean create(@RequestParam String name) {
	Part vggh = new Part();
	vggh.setName(name);
//	vggh.setId(id);
	partRepository.save(vggh);
	return true;
 }

@PostMapping ("/part/")
public void deletePart(@RequestParam Integer id) {
partRepository.deleteById(id);
}

@PutMapping ("/updatePart")
	public Boolean updatePart(@RequestParam Integer id, @RequestParam String name) {
	Part part = partRepository.findById(id).orElse(new Part());
	part.setName(name);
	partRepository.save(part);
	return true;
}

@PostMapping ("/part/items")
public List<Items> searchItems(@RequestParam Integer id) {
	Part part = partRepository.findById(id).orElse(new Part());

	List<Items> tt = part.getItems();

	return tt;
}

}