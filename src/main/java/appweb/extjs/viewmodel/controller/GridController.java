package appweb.extjs.viewmodel.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import appweb.extjs.viewmodel.controller.Grid;

import appweb.extjs.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
 * @RestController public class GridController {
 * 
 * @RequestMapping("/users2") public String grid() {
 * 
 * String str = "[{\"id\": 1,\r\n" + "         \"secondName\": \"Fominov\",\r\n"
 * + "         \"firstName\": \"Anton\",\r\n" +
 * "          \"lastName\": \"Eng\",\r\n" + "           \"year\": \"1996\",\r\n"
 * + "            \"number\": \"89192379261\"},\r\n" + "{\"id\": 2,\r\n" +
 * "         \"secondName\": \"Petrov\",\r\n" +
 * "         \"firstName\": \"Ivan\",\r\n" +
 * "          \"lastName\": \"Nobody knows\",\r\n" +
 * "           \"year\": \"15.10.1990\",\r\n" +
 * "            \"number\": \"7-952-852-58-22\"}]\r\n"; return str; } }
 */

@RestController

 public class GridController{
 
 @Autowired
 private ClientRepository clientRepository;
 
 @GetMapping ("/users2")
 	public List<Grid> getAll(){
	 return (List<Grid>) clientRepository.findAll();
 }
 
 
 }




