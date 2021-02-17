package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.CitiesRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class ClubsController {

	@Autowired
	private ClubsRepository clubsRepository;

	@Autowired
	private CitiesRepository citiesRepository;

	@GetMapping("/clubs")
	public List<Clubs> getAll() {
		return (List<Clubs>) clubsRepository.findAll();
	}

	@GetMapping("/clubs/{Id}")
	public Optional<Clubs> getClubsById(@PathVariable("Id") int id) {
		return clubsRepository.findById(id);
	}

	@PostMapping("/cities/clubs")
	public List<Clubs> searchClubs(@RequestParam Integer id) {
		Cities city = citiesRepository.findById(id).orElse(new Cities());
		List<Clubs> clubs = city.getClubs();
		return clubs;
	}

	@PostMapping("/clubs/create")
	public Boolean create(@RequestParam String name, @RequestParam String adress, @RequestParam String openTime,
			@RequestParam String closeTime, @RequestParam Integer city) {
		Cities city1 = citiesRepository.findById(city).orElse(new Cities());
		Clubs club = new Clubs();
		club.setName(name);
		club.setAdress(adress);
		club.setOpenTime(openTime);
		club.setCloseTime(closeTime);
		club.setCity(city1);
		clubsRepository.save(club);
		return true;
	}

	@PostMapping("/clubs/delete")
	public void deleteUser(@RequestParam Integer id) {
		clubsRepository.deleteById(id);
	}

	@PutMapping ("/clubs/update")
	public Boolean update(@RequestParam Integer id, @RequestParam String name, @RequestParam String adress, @RequestParam String openTime, @RequestParam String closeTime) {
		Clubs club = clubsRepository.findById(id).orElse(new Clubs());
		club.setName(name);
		club.setAdress(adress);
		club.setOpenTime(openTime);
		club.setCloseTime(closeTime);
		clubsRepository.save(club);
		return true;
	 }
	 

}
