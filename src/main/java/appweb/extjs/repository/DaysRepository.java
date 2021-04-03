package appweb.extjs.repository;

import org.springframework.data.repository.CrudRepository;

import appweb.extjs.viewmodel.controller.Days;

public interface DaysRepository extends CrudRepository<Days, Integer> {
	 
}
