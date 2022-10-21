package digital.quintino.sistemafinanceiroapi.repository;

import digital.quintino.sistemafinanceiroapi.model.ParcelamentoDomain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParcelamentoInterfaceRepository extends JpaRepository<ParcelamentoDomain, Long> { }
