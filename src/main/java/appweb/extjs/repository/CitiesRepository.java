package appweb.extjs.repository;

import appweb.extjs.viewmodel.controller.Cities;
import org.springframework.data.repository.CrudRepository;

public interface CitiesRepository extends CrudRepository<Cities, Integer> {
	 
}
