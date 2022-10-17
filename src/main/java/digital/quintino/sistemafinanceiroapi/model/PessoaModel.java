package digital.quintino.sistemafinanceiroapi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
	
	@Column(name = "NOME", nullable = false)
	private String nome;
	
	public PessoaModel() { }

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

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
