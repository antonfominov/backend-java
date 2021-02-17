package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.*;

import appweb.extjs.repository.UsersRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@RestController

public class UsersController{

    @Autowired
    private UsersRepository usersRepository;
    
    @PostMapping("/login")
    public Users getUsersByUsername(String username) {
        Users users = usersRepository.findByUsername(username).orElse(new Users());
        return users;
    }
    
    @GetMapping ("/users")
	public List<Users> getAll(){
	 return (List<Users>) usersRepository.findAll();
    }
    
    @PostMapping ("/users/create")
	public Boolean create(@RequestParam String firstName, @RequestParam String secondName, @RequestParam String lastName, @RequestParam String username, @RequestParam String password, @RequestParam String role) {
		Users user = new Users();
		user.setFirstName(firstName);
		user.setSecondName(secondName);
		user.setLastName(lastName);
		user.setUsername(username);
		user.setPassword(password);
		user.setRole(role);
		usersRepository.save(user);
		return true;
	 }
    
    @PostMapping ("/users/delete")
	public void deleteUser(@RequestParam Integer id) {
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
