package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.UsersRepository;
import appweb.extjs.repository.ActiveUsersRepository;
import appweb.extjs.repository.AdminsRepository;
import appweb.extjs.repository.ClientsRepository;
import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.DaysRepository;

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
		//club.getDaySet();
    	return listDays;
    }
    
}
