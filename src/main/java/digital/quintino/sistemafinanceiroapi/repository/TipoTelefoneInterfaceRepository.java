package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.TipoTelefoneDomain;

public interface TipoTelefoneInterfaceRepository extends JpaRepository<TipoTelefoneDomain, Long> { }
