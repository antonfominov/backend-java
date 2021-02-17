package appweb.extjs.viewmodel.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import appweb.extjs.repository.LabelRepository;

@RestController

public class LabelController {
	
	@Autowired
	private LabelRepository labelRepository;

	@GetMapping ("/label")
		public List<Label> getAll(){
		 return (List<Label>) labelRepository.findAll();
	}

	@GetMapping("/label/{Id}")
		public Optional<Label> getPartById(@PathVariable("Id") int id) {
		return labelRepository.findById(id);
	}

	@PostMapping ("/label/create")
	public Boolean create(@RequestParam String header, @RequestParam String footer) {
		Label label = new Label();
		label.setHeader(header);
		label.setFooter(footer);
		labelRepository.save(label);
		return true;
	 }

	@PostMapping ("/label/delete")
	public void deleteLabel(@RequestParam Integer id) {
	labelRepository.deleteById(id);
	}

	@PutMapping ("/label/update")
		public Boolean updateLabel(@RequestParam Integer id, @RequestParam String header, @RequestParam String footer) {
		Label label = labelRepository.findById(id).orElse(new Label());
		label.setHeader(header);
		label.setFooter(footer);
		labelRepository.save(label);
		return true;
	}
}
