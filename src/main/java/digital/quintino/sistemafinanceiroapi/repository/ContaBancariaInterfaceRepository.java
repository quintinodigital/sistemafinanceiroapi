package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.ContaBancariaModel;

public interface ContaBancariaInterfaceRepository extends JpaRepository<ContaBancariaModel, Long> { }
