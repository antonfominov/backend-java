package appweb.extjs.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import appweb.extjs.viewmodel.controller.Trainings;


public interface TrainingsRepository extends CrudRepository<Trainings, Integer> {
}
