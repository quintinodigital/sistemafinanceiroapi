package digital.quintino.sistemafinanceiroapi.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "TB_PESSOA")
public class PessoaModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name = "ID_TIPO_PESSOA")
	private TipoPessoaModel tipoPessoaDomain;
	
	@OneToMany(mappedBy = "pessoaModel", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<TelefoneDomain> telefoneDomainList = new ArrayList<>();
	
	@OneToMany(mappedBy = "pessoaModel", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<DocumentoModel> documentoModelList = new ArrayList<>();
	
	@Column(name = "NOME", nullable = false)
	private String nome;
	
	public PessoaModel() { }
	
	public void setTelefone(TelefoneDomain telefoneDomain) {
		telefoneDomain.setPessoaModel(this);
		this.telefoneDomainList.add(telefoneDomain);
	}
	
	public void setDocumento(DocumentoModel documentoModel) {
		documentoModel.setPessoaModel(this);
		this.documentoModelList.add(documentoModel);
	}

	public PessoaModel(TipoPessoaModel tipoPessoaDomain, String nome) {
		this.tipoPessoaDomain = tipoPessoaDomain;
		this.nome = nome;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public TipoPessoaModel getTipoPessoaDomain() {
		return tipoPessoaDomain;
	}

	public void setTipoPessoaDomain(TipoPessoaModel tipoPessoaDomain) {
		this.tipoPessoaDomain = tipoPessoaDomain;
	}

	public List<TelefoneDomain> getTelefoneDomainList() {
		return telefoneDomainList;
	}

	public void setTelefoneDomainList(List<TelefoneDomain> telefoneDomainList) {
		this.telefoneDomainList = telefoneDomainList;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<DocumentoModel> getDocumentoModelList() {
		return documentoModelList;
	}

	public void setDocumentoModelList(List<DocumentoModel> documentoModelList) {
		this.documentoModelList = documentoModelList;
	}

}
