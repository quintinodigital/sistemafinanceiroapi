package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.LancamentoFinanceiroModel;

public interface LancamentoFinanceiroInterfaceRepository extends JpaRepository<LancamentoFinanceiroModel, Long> { }
