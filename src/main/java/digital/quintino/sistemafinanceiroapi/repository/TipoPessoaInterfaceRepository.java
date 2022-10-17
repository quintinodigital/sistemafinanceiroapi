package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.TipoPessoaModel;

public interface TipoPessoaInterfaceRepository extends JpaRepository<TipoPessoaModel, Long> { }