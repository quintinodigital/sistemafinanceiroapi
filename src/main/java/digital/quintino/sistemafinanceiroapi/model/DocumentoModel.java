package digital.quintino.sistemafinanceiroapi.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TB_DOCUMENTO")
public class DocumentoModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ID_TIPO_DOCUMENTO")
	private TipoDocumentoModel tipoDocumentoModel;
	
	@ManyToOne
	@JoinColumn(name = "ID_PESSOA", referencedColumnName = "codigo", nullable = false)
	private PessoaModel pessoaModel;
	
	@Column(name = "NUMERO", nullable = false)
	private String numero;
	
	public DocumentoModel() { }
	
	public DocumentoModel(TipoDocumentoModel tipoDocumentoModel, String numero) {
		this.tipoDocumentoModel = tipoDocumentoModel;
		this.numero = numero;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public TipoDocumentoModel getTipoDocumentoModel() {
		return tipoDocumentoModel;
	}

	public void setTipoDocumentoModel(TipoDocumentoModel tipoDocumentoModel) {
		this.tipoDocumentoModel = tipoDocumentoModel;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public PessoaModel getPessoaModel() {
		return pessoaModel;
	}

	public void setPessoaModel(PessoaModel pessoaModel) {
		this.pessoaModel = pessoaModel;
	}

}
