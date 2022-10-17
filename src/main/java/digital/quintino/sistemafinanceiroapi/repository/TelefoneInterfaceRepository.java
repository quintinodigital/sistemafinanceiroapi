package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.TelefoneDomain;

public interface TelefoneInterfaceRepository extends JpaRepository<TelefoneDomain, Long> { 
	public TelefoneDomain findByNumero(String numero);
}
