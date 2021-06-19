package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.TrainersRepository;
import appweb.extjs.repository.UsersRepository;
import appweb.extjs.repository.AdminsRepository;
import appweb.extjs.repository.CitiesRepository;
import appweb.extjs.repository.ClientsRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class ClientsController {

	@Autowired
	private ClubsRepository clubsRepository;
	@Autowired
	private CitiesRepository citiesRepository;
	@Autowired
	private UsersRepository usersRepository;
	@Autowired
	private AdminsRepository adminsRepository;
	@Autowired
	private TrainersRepository trainersRepository;
	@Autowired
	private ClientsRepository clientsRepository;

	@GetMapping("/clients")
	public List<Clients> getAll(@CookieValue(value = "id", defaultValue = "0") Integer id) {
		Users user = usersRepository.findById(id).orElse(new Users());
		if(user.getRole().equals("admin")) {
			Admins admin = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins());
			List<Clients> clients = admin.getClients();
			System.out.println("CLIENTS" + clients);
			return clients;
		}
		else if(user.getRole().equals("user")) {
			List<Clients> clients = user.getAdmin().getClients();
			return clients;
		}
		return null;
	}

	@GetMapping("/clients/{Id}")
	public Optional<Trainers> getTrainersById(@PathVariable("Id") int id) {
		return trainersRepository.findById(id);
	}

	@PostMapping("/clubs/clients")
	public List<Trainers> searchTrainers(@RequestParam Integer id) {
		Clubs clubs = clubsRepository.findById(id).orElse(new Clubs());
		List<Trainers> trainers = clubs.getTrainers();
		return trainers;
	}

	@PostMapping("/clients/create")
	public Boolean create(@RequestParam String firstName, @RequestParam String secondName, @RequestParam String lastName, @RequestParam Date birthday, @RequestParam String phone, @RequestParam Integer id_club, @CookieValue(value = "id", defaultValue = "0") Integer id) {
		Users user = usersRepository.findById(id).orElse(new Users());
		Admins admin = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins());
		
		if(user.getRole().equals("admin")) {
			Clients client = new Clients();
			client.setSecondName(secondName);
			client.setFirstName(firstName);
			client.setLastName(lastName);
			client.setBirthday(birthday);
			client.setPhone(phone);
			client.setClub(clubsRepository.findById(id_club).get());
			clientsRepository.save(client);
		}
		
		return true;
	}

	@PostMapping("/clients/delete")
	public void deleteTrainer(@RequestParam Integer id) {
		trainersRepository.deleteById(id);
	}

	@PutMapping ("/clients/update")
	public Boolean update(@RequestParam Integer id,@RequestParam String secondName, @RequestParam String firstName, @RequestParam String lastName,
			@RequestParam Integer price) {
		Trainers trainers = trainersRepository.findById(id).orElse(new Trainers());
		trainers.setSecondName(secondName);
		trainers.setFirstName(firstName);
		trainers.setLastName(lastName);
		trainers.setPrice(price);
		trainersRepository.save(trainers);
		return true;
	 }
	 

}
