package appweb.extjs.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import appweb.extjs.viewmodel.controller.Clients;
import appweb.extjs.viewmodel.controller.Users;


public interface ClientsRepository extends CrudRepository<Clients, Integer> {
	Optional<Clients> findBySecondName(String secondName);
}
