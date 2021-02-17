package appweb.extjs.repository;

import appweb.extjs.viewmodel.controller.Items;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface ItemsRepository extends CrudRepository<Items, Integer> {

}
