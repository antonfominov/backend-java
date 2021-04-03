package appweb.extjs.repository;

import org.springframework.data.repository.CrudRepository;
import appweb.extjs.viewmodel.controller.ActiveUsers;


public interface ActiveUsersRepository extends CrudRepository<ActiveUsers, Integer> {
}
