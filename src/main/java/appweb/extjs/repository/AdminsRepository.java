package appweb.extjs.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import appweb.extjs.viewmodel.controller.Admins;


public interface AdminsRepository extends CrudRepository<Admins, Integer> {
	Optional<Admins> findByUsername(String Username);
}
