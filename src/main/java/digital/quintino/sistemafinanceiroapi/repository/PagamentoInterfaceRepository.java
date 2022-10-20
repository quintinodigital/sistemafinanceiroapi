package digital.quintino.sistemafinanceiroapi.repository;

import digital.quintino.sistemafinanceiroapi.model.PagamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagamentoInterfaceRepository extends JpaRepository<PagamentoModel, Long> { }
