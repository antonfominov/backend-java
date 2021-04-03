package appweb.extjs.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import appweb.extjs.viewmodel.controller.Trainers;


public interface TrainersRepository extends CrudRepository<Trainers, Integer> {
}
