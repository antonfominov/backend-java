package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.TrainersRepository;
import appweb.extjs.repository.TrainingsRepository;
import appweb.extjs.repository.UsersRepository;
import appweb.extjs.repository.AdminsRepository;
import appweb.extjs.repository.CitiesRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class TrainingsController {

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
	private TrainingsRepository trainingsRepository;


	@GetMapping("/trainings")
	public List<Trainings> getAll(@CookieValue(value = "id", defaultValue = "0") Integer id) {
		Users user = usersRepository.findById(id).orElse(new Users());
		if(user.getRole().equals("admin")) {
			List<Trainings> trainings = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins()).getTrainings();
			return trainings;
		}
		else if(user.getRole().equals("user")) {
			List<Trainings> trainings = user.getAdmin().getTrainings();
			return trainings;
		}
		return null;
	}

	@GetMapping("/trainings/{Id}")
	public Optional<Trainings> getTrainingsById(@PathVariable("Id") int id) {
		return trainingsRepository.findById(id);
	}

	@PostMapping("/trainers/trainings")
	public List<Trainings> searchTrainings(@RequestParam Integer id) {
		Trainers trainers = trainersRepository.findById(id).orElse(new Trainers());
		List<Trainings> trainings = trainers.getTrainings();
		return trainings;
	}

	@PostMapping("/trainings/create")
	public Boolean create(@RequestParam String name, @RequestParam String startTime, @RequestParam Integer time,
			@RequestParam Integer price, @RequestParam Integer trainer, @RequestParam Integer maxValue,  @CookieValue(value = "id", defaultValue = "0") Integer id) {
		
		Users user = usersRepository.findById(id).orElse(new Users());
		Admins admin = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins());
		Trainers trainer2 = trainersRepository.findById(trainer).orElse(new Trainers());
		Trainings training = new Trainings();
		training.setName(name);
		training.setStartTime(startTime);
		training.setTime(time);
		training.setPrice(price);
		training.setParentName(trainer2.getLastName());
		training.setTrainers(trainer2);
		training.setAdmins(admin);
		training.setMaxValue(maxValue);
		trainingsRepository.save(training);
		return true;
	}

	@PostMapping("/trainings/delete")
	public void deleteTrainings(@RequestParam Integer id) {
		trainingsRepository.deleteById(id);
	}

	@PutMapping ("/trainings/update")
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
