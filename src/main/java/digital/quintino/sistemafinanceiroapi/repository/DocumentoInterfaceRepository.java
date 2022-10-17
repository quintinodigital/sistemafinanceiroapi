package digital.quintino.sistemafinanceiroapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.quintino.sistemafinanceiroapi.model.DocumentoModel;

public interface DocumentoInterfaceRepository extends JpaRepository<DocumentoModel, Long> { }
