package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.DaysRepository;
import appweb.extjs.repository.UsersRepository;
import appweb.extjs.repository.AdminsRepository;
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
	@Autowired
	private UsersRepository usersRepository;
	@Autowired
	private AdminsRepository adminsRepository;
	@Autowired
    private DaysRepository daysRepository;

	@GetMapping("/clubs")
	public List<Clubs> getAll(@CookieValue(value = "id", defaultValue = "0") Integer id) {
		//return (List<Clubs>) clubsRepository.findAll();
		Users user = usersRepository.findById(id).orElse(new Users());
		if(user.getRole().equals("admin")) {
			List<Clubs> clubs = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins()).getClubs();
			return clubs;
		}
		else if(user.getRole().equals("user")) {
			List<Clubs> clubs = user.getAdmin().getClubs();
			return clubs;
		}
		return null;
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
			@RequestParam String closeTime, @RequestParam Integer city,  @CookieValue(value = "id", defaultValue = "0") Integer id) {
		
		Users user = usersRepository.findById(id).orElse(new Users());
		Admins admin = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins());
		Cities city1 = citiesRepository.findById(city).orElse(new Cities());
		Clubs club = new Clubs();
		club.setName(name);
		club.setAdress(adress);
		club.setOpenTime(openTime);
		club.setCloseTime(closeTime);
		club.setParentName(city1.getName());
		club.setCity(city1);
		club.setAdmins(admin);
		
		for	(int i=0; i<=6; i++) {
			if(i==0) {
				Days day = new Days();
				day.setName("Понедельник");
				day.getClubSet().add(club);
				club.getDaySet().add(day);
				day.setNumber(1);
				daysRepository.save(day);	    				
			}
			if(i==1) {
    			Days day = new Days();
    			day.setName("Вторник");
    			day.getClubSet().add(club);
				club.getDaySet().add(day);
    			day.setNumber(2);
    			daysRepository.save(day);
    		}
			if(i==2) {
    			Days day = new Days();
    			day.setName("Среда");
    			day.getClubSet().add(club);
				club.getDaySet().add(day);
    			day.setNumber(3);
    			daysRepository.save(day);
    		}
			if(i==3) {
    			Days day = new Days();
    			day.setName("Четверг");
    			day.getClubSet().add(club);
				club.getDaySet().add(day);
    			day.setNumber(4);
    			daysRepository.save(day);
    		}
			if(i==4) {
    			Days day = new Days();
    			day.setName("Пятница");
    			day.getClubSet().add(club);
				club.getDaySet().add(day);
    			day.setNumber(5);
    			daysRepository.save(day);
    		}
			if(i==5) {
    			Days day = new Days();
    			day.setName("Суббота");
    			day.getClubSet().add(club);
				club.getDaySet().add(day);
    			day.setNumber(6);
    			daysRepository.save(day);
    		}
			if(i==6) {
    			Days day = new Days();
    			day.setName("Воскресенье");
    			day.getClubSet().add(club);
				club.getDaySet().add(day);
    			day.setNumber(7);
    			daysRepository.save(day);
    		}
		}
		
		//admin.getDays().forEach(day -> club.getDaySet().add(day));
		//admin.getDays().forEach(day -> day.getClubSet().add(club));
		
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
