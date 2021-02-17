package appweb.extjs.repository;

import appweb.extjs.viewmodel.controller.Clubs;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;


public interface ClubsRepository extends CrudRepository<Clubs, Integer> {
    Optional<Clubs> findById(String id);
}
