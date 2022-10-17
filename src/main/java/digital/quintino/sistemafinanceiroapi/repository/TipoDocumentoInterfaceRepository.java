package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.TipoDocumentoModel;

public interface TipoDocumentoInterfaceRepository extends JpaRepository<TipoDocumentoModel, Long> { }
