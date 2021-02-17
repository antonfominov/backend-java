package appweb.extjs.freemarker;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import appweb.extjs.repository.ClubsRepository;
import appweb.extjs.repository.LabelRepository;
import appweb.extjs.repository.CitiesRepository;
import appweb.extjs.viewmodel.controller.Cities;
import appweb.extjs.viewmodel.controller.Clubs;
import appweb.extjs.viewmodel.controller.Items;
import appweb.extjs.viewmodel.controller.Label;
import appweb.extjs.viewmodel.controller.Part;
import freemarker.template.Template;
import freemarker.template.Configuration;



@Controller



public class FreemarkerPart {

	@Autowired
	private CitiesRepository citiesRepository;
	
	@Autowired
	private ClubsRepository clubsRepository;
	
	@Autowired
	private LabelRepository labelRepository;
	

	
	 @RequestMapping ("/list")
	 public String city (Model model){
		 Iterable<Cities> city = citiesRepository.findAll();
		 Iterable<Clubs> clubs = clubsRepository.findAll();
//		 Iterable<Label> label = labelRepository.findAll();
//		 List<Items> tt = part.getItems();
		 model.addAttribute("city", city);
		 model.addAttribute("clubs", clubs);
//		 model.addAttribute("label", label);
	 return "list";
	 }
	/*
	 * @RequestMapping(value="/list") private String list() {
	 * 
	 * return "list"; }
	 */
}
