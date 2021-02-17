package appweb.extjs.repository;

import appweb.extjs.viewmodel.controller.Grid;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Grid, Integer> {
	
}
