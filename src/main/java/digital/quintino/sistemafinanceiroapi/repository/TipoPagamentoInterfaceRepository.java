package digital.quintino.sistemafinanceiroapi.repository;

import digital.quintino.sistemafinanceiroapi.model.TipoPagamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoPagamentoInterfaceRepository extends JpaRepository<TipoPagamentoModel, Long> { }
