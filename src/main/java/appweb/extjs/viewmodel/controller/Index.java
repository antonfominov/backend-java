package appweb.extjs.viewmodel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Index {

	@RequestMapping(value="/")
	private String indexPage() {
		
		return "index";
	}	
		
}
