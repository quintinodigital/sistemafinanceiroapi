package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.PessoaModel;

public interface PessoaInterfaceRepository extends JpaRepository<PessoaModel, Long> { 
	public PessoaModel findByNome(String nome);
}
