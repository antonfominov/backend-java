package appweb.extjs.repository;

import appweb.extjs.viewmodel.controller.Users;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface UsersRepository extends CrudRepository<Users, Integer> {
    Optional<Users> findByUsername(String username);
}
