package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.UsersRepository;
import appweb.extjs.repository.ActiveUsersRepository;
import appweb.extjs.repository.AdminsRepository;
import appweb.extjs.repository.ClientsRepository;
import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.DaysRepository;
import appweb.extjs.repository.TrainingsRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class StatisticController{

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private ActiveUsersRepository activeUsersRepository;
    @Autowired
    private AdminsRepository adminsRepository;
    @Autowired
    private DaysRepository daysRepository;
    @Autowired
    private ClientsRepository clientsRepository;
    @Autowired
    private ClubsRepository clubsRepository;
    @Autowired
    private TrainingsRepository trainingsRepository;
    
    @GetMapping("/statistic")
    public List<Object> getStatistic(@CookieValue(value = "id", defaultValue = "0") Integer id) {
    	Users users = usersRepository.findById(id).orElse(new Users());
    	
    	List<Object> over = new ArrayList<>();
    	
    	if (users.getRole().equals("user")) {
    		Optional<Users> optionalUser = Optional.of(users);
        	
        	Clients client = clientsRepository.findBySecondName(users.getSecondName()).get();
        	Optional<Clients> optionalClient = Optional.of(client);
        	
        	Set<Trainings> trainings = clientsRepository.findBySecondName(users.getSecondName()).get().getTrainingSet();
        	String trainings2 = trainings.toString();
        	String answer = optionalUser.toString();
        	over.add(optionalClient);
        	over.add(trainings2);
    	}
    	else if(users.getRole().equals("admin")) {
    		Optional<Users> optionalUser = Optional.of(users);
        	over.add(optionalUser);
    	}
    	
    	//over.add(optionalClient);
    	//over.add(trainings2);
        return over;
    }
    
    @GetMapping("/shedule")
    public  List<Days> shedule(@RequestParam Integer id_club, @CookieValue(value = "id", defaultValue = "0") Integer id) {
    	
    	Users user = usersRepository.findById(id).orElse(new Users());
		Admins admin = adminsRepository.findByUsername(user.getUsername()).orElse(new Admins());
		Clubs club = clubsRepository.findById(id_club).get();
		
		List<Days> listDays = club.getDaySet().stream().sorted(Comparator.comparing(Days::getNumber)).collect(Collectors.toList());
		//listDays.forEach(day -> day.getTrainings().stream().sorted(Comparator.comparing(Trainings::getStartTime)).collect(Collectors.toList()));
    	return listDays;
    }
    
    @GetMapping("/shedule/clubTrainingList")
    public  List<Trainings> trainings (@RequestParam(required = false) Integer id_club, @RequestParam Boolean readOnly, @RequestParam(required = false) Integer dayId, @CookieValue(value = "id", defaultValue = "0") Integer id) {
    	List <Trainings> trainings = new ArrayList<>();
    	if(readOnly == false) {
    		Clubs club = clubsRepository.findById(id_club).get();
    		List <Trainers> trainers = club.getTrainers();
    	
    		for (Trainers trainer : trainers) {
    			trainer.getTrainings().forEach(training -> trainings.add(training));
    		}
    		return trainings;
    	}
		else {
			Days day = daysRepository.findById(dayId).get();
			day.getTrainings().forEach(training -> trainings.add(training));
			return trainings;
		}
    }
    
    @GetMapping("/shedule/clientTrainingList")
    public  Set<Trainings> clientTrainings (@RequestParam(required = false) Integer id_club, @RequestParam Boolean readOnly, @RequestParam(required = false) Integer dayId, @CookieValue(value = "id", defaultValue = "0") Integer id) {
    	return clientsRepository.findBySecondName(usersRepository.findById(id).get().getSecondName()).get().getTrainingSet();
    }
    
    @PostMapping("/shedule/clubTrainingList/create")
    public Boolean create (@RequestParam Integer dayId, @RequestParam Integer trainingId,  @CookieValue(value = "id", defaultValue = "0") Integer id) {
    	Days day = daysRepository.findById(dayId).get();
    	Trainings training = trainingsRepository.findById(trainingId).get();
    	day.getTrainings().add(training);
    	training.getDaySet().add(day);
    	daysRepository.save(day);
    	trainingsRepository.save(training);
    	return true;
    }
    
    @PostMapping("/shedule/clubTrainingList/delete")
    public Boolean create (@RequestParam Integer dayId, @RequestParam Integer trainingId) {
    	Days day = daysRepository.findById(dayId).get();
    	Trainings training = trainingsRepository.findById(trainingId).get();
    	day.getTrainings().remove(training);
    	training.getDaySet().remove(day);
    	daysRepository.save(day);
    	trainingsRepository.save(training);
    	return true;
    }
    
    @PostMapping("/shedule/join")
    public Boolean join (@RequestParam Integer idTraining, @RequestParam Integer idUser) {
    	Users user = usersRepository.findById(idUser).get();
    	if (user.getRole().equals("user")) {
    		Clients client = clientsRepository.findBySecondName(user.getSecondName()).get();
    		Trainings training = trainingsRepository.findById(idTraining).get();
    		client.getTrainingSet().add(training);
    		training.getClientSet().add(client);
    		training.setValue(training.getClientSet().size());
    		training.setProgress(training.getValue().floatValue()/training.getMaxValue().floatValue());
    		clientsRepository.save(client);
    		trainingsRepository.save(training);
    	}
    	return true;
    }
    
    @PostMapping("/shedule/exit")
    public Boolean exit (@RequestParam Integer idTraining, @CookieValue(value = "id", defaultValue = "0") Integer id) {
    	Users user = usersRepository.findById(id).get();
    	Clients client = clientsRepository.findBySecondName(user.getSecondName()).get();
    	Trainings training = trainingsRepository.findById(idTraining).get();
    	client.getTrainingSet().remove(training);
    	training.getClientSet().remove(client);
    	training.setValue(training.getClientSet().size());
    	training.setProgress(training.getValue().floatValue()/training.getMaxValue().floatValue());
    	clientsRepository.save(client);
    	trainingsRepository.save(training);
    	return true;
    }

}
