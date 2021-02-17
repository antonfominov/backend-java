package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import appweb.extjs.repository.CitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class CitiesController{

@Autowired
private CitiesRepository citiesRepository;

@CrossOrigin(origins = "http://localhost:3000")
@GetMapping ("/cities")
	public List<Cities> getAll(){
	 return (List<Cities>) citiesRepository.findAll();
}

@GetMapping("/cities/{Id}")
	public Optional<Cities> getCityById(@PathVariable("Id") int id) {
	return citiesRepository.findById(id);
}

@PostMapping ("/cities/create")
public Boolean create(@RequestParam String name) {
	Cities city = new Cities();
	city.setName(name);
	citiesRepository.save(city);
	return true;
 }

@PostMapping ("/cities/delete")
public void deleteCity(@RequestParam Integer id) {
citiesRepository.deleteById(id);
}

@PutMapping ("/cities/update")
	public Boolean updateCity(@RequestParam Integer id, @RequestParam String name) {
	Cities city = citiesRepository.findById(id).orElse(new Cities());
	city.setName(name);
	citiesRepository.save(city);
	return true;
}
}