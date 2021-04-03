package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.Cookie;

import appweb.extjs.repository.ActiveUsersRepository;
import appweb.extjs.repository.AdminsRepository;
import appweb.extjs.repository.CitiesRepository;
import appweb.extjs.repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class CitiesController{

@Autowired
private CitiesRepository citiesRepository;
@Autowired
private UsersRepository usersRepository;
@Autowired
private AdminsRepository adminsRepository;
@Autowired
private ActiveUsersRepository activeUsersRepository;

@CrossOrigin(origins = "http://localhost:3000")
@GetMapping ("/cities")
	public List<Cities> getAll(@CookieValue(value = "id", defaultValue = "0") Integer id){
	Users user = usersRepository.findById(id).orElse(new Users());
	if(user.getRole().equals("admin")) {
		List<Cities> cities = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins()).getCities();
		return cities;
	}
	else if(user.getRole().equals("user")) {
		List<Cities> cities = user.getAdmin().getCities();
		return cities;
	}
	return null;
}

@GetMapping("/cities/{Id}")
	public Optional<Cities> getCityById(@PathVariable("Id") int id) {
	return citiesRepository.findById(id);
}

@PostMapping ("/cities/create")
public Boolean create(@RequestParam String name, @CookieValue(value = "id", defaultValue = "0") Integer id) {
	Cities city = new Cities();
	
	Users user = usersRepository.findById(id).orElse(new Users());
	
	if(user.getRole().equals("admin")) {
		Admins admin = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins());
		city.setName(name);
		city.setAdmin(admin);
		citiesRepository.save(city);
	}
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