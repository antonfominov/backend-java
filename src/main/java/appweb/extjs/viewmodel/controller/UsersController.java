package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.UsersRepository;
import appweb.extjs.repository.ActiveUsersRepository;
import appweb.extjs.repository.AdminsRepository;
import appweb.extjs.repository.DaysRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class UsersController{

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private ActiveUsersRepository activeUsersRepository;
    @Autowired
    private AdminsRepository adminsRepository;
    @Autowired
    private DaysRepository daysRepository;
    
    @PostMapping("/login")
    public Integer getUsersByUsername(String username, String password, HttpServletResponse response) {
        Users users = usersRepository.findByUsername(username).orElse(new Users());
        String truePass = users.getPassword();
        Integer result = null;
        
        if (truePass.equals(password)) {
        	activeUsersRepository.deleteAll();
        	ActiveUsers activeUser = new ActiveUsers();
        
            activeUser.setFirstName(users.getFirstName());
            activeUser.setSecondName(users.getSecondName());
            activeUser.setLastName(users.getLastName());
            activeUser.setUsername(users.getUsername());
            activeUser.setPassword(users.getPassword());
            activeUser.setRole(users.getRole());
            activeUsersRepository.save(activeUser);
        
            Cookie cookie = new Cookie("id", String.valueOf(users.getId()));
            response.addCookie(cookie);
            
			/*
			 * if((users.getRole()).equals("admin")) { Admins admin =
			 * adminsRepository.findByUsername(username).orElse(new Admins()); Cookie cookie
			 * = new Cookie("id", String.valueOf(admin.getId()));
			 * response.addCookie(cookie); } else { Cookie cookie = new Cookie("id",
			 * String.valueOf(users.getId())); response.addCookie(cookie); }
			 */
            
        	switch (users.getRole()) {
        		case ("admin"):
	                result = 0;
	                break;
        		case ("user"):
        			result = 1;
                	break;
        		default:
        			result = 2;
                    break;
        	}
        }
        else {result = 3;}
		return result;
        	
        
		/*
		 * activeUsersRepository.deleteAll(); ActiveUsers activeUser = new
		 * ActiveUsers();
		 * 
		 * activeUser.setFirstName(users.getFirstName());
		 * activeUser.setSecondName(users.getSecondName());
		 * activeUser.setLastName(users.getLastName());
		 * activeUser.setUsername(users.getUsername());
		 * activeUser.setPassword(users.getPassword());
		 * activeUser.setRole(users.getRole()); activeUsersRepository.save(activeUser);
		 * 
		 * Cookie cookie = new Cookie("id", String.valueOf(users.getId()));
		 * response.addCookie(cookie);
		 * 
		 * return users;
		 */
    }
    
    @GetMapping ("/users")
	public List<Users> getAll(@CookieValue(value = "id", defaultValue = "0") Integer id){
    	String name = usersRepository.findById(id).orElse(new Users()).getUsername();
    	Admins admin = adminsRepository.findByUsername(name).orElse(new Admins());
    	List<Users> list = admin.getUsers();
    	list.add(usersRepository.findByUsername(name).orElse(new Users()));
    	return list;
	 //return (List<Users>) usersRepository.findAll();
    }
    
    @PostMapping ("/users/create")
	public Boolean create(@RequestParam String firstName, @RequestParam String secondName, @RequestParam String lastName, @RequestParam String username, @RequestParam String password, @RequestParam String role,  @CookieValue(value = "id", defaultValue = "0") Integer id) {
    	
    		Users admin = usersRepository.findById(id).orElse(new Users());
    		String name = admin.getUsername();
    		Admins admins = adminsRepository.findByUsername(name).orElse(new Admins());
    		
    		Users user = new Users();
    		user.setFirstName(firstName);
    		user.setSecondName(secondName);
    		user.setLastName(lastName);
    		user.setUsername(username);
    		user.setPassword(password);
    		user.setRole(role);
    		
    		user.setAdmin(admins);
    		usersRepository.save(user);
    		//adminsRepository.save(admins);
    	
			if (role.equals("admin")) {
				Admins admins2 = new Admins();
	    		admins2.setFirstName(firstName);
	    		admins2.setSecondName(secondName);
	    		admins2.setLastName(lastName);
	    		admins2.setUsername(username);
	    		admins2.setPassword(password);
	    		admins2.setRole(role);
	    		adminsRepository.save(admins2);
	    		
	    		for	(int i=0; i<6; i++) {
	    			if(i==0) {
	    				Days day = new Days();
	    				day.setName("Понедельник");
	    				day.setAdmins(admins2);
	    				daysRepository.save(day);	    				
	    			}
	    			if(i==1) {
		    			Days day = new Days();
		    			day.setName("Вторник");
		    			day.setAdmins(admins2);
		    			daysRepository.save(day);
		    		}
	    		}
	    		
			}
    		
    		
		/*
		 * if (role.equals("user")) { Admins admins =
		 * adminsRepository.findById(id).orElse(new Admins());
		 * user.getAdminsSet().add(admins); admins.getUsersSet().add(user);
		 * usersRepository.save(user); adminsRepository.save(admins); }
		 */
    	
		return true;
	 }
    
    @PostMapping ("/users/delete")
	public void deleteUser(@RequestParam Integer id, @CookieValue(value = "id", defaultValue = "0") Integer id2) {
    	//usersRepository.deleteById(id);
    	String name = usersRepository.findById(id).orElse(new Users()).getUsername();
    	
    	Users user = usersRepository.findById(id).orElse(new Users());
    	Admins admin = adminsRepository.findByUsername(name).orElse(new Admins());
    	
    	//admin.getUsers().remove(user);
    	usersRepository.deleteById(id);
	}
    
    @PutMapping ("/users/update")
	public Boolean update(@RequestParam Integer id, @RequestParam String firstName, @RequestParam String secondName, @RequestParam String lastName, @RequestParam String username, @RequestParam String password, @RequestParam String role) {
    	Users user = usersRepository.findById(id).orElse(new Users());
		user.setFirstName(firstName);
		user.setSecondName(secondName);
		user.setLastName(lastName);
		user.setUsername(username);
		user.setPassword(password);
		user.setRole(role);
		usersRepository.save(user);
		return true;
	 }


}
