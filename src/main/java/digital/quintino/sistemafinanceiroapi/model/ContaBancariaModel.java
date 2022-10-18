package digital.quintino.sistemafinanceiroapi.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import digital.quintino.sistemafinanceiroapi.enumeration.TipoContaBancariaEnumeration;

@Entity
@Table(name = "TB_CONTA_BANCARIA")
public class ContaBancariaModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "DESCRICAO_TIPO_CONTA")
	private TipoContaBancariaEnumeration tipoContaBancariaEnumeration;
	
	@OneToOne
	@JoinColumn(name = "ID_PESSOA_INSTITTUICAO_FINANCEIRA")
	private PessoaModel pessoaInstituicaoFinanceira;
	
	@OneToOne
	@JoinColumn(name = "ID_PESSOA_TITULAR")
	private PessoaModel pessoaTitular;
	
	@Column(name = "NUMERO_AGENCIA")
	private String numeroAgencia;
	
	@Column(name = "NUMERO_CONTA")
	private String numeroConta;
	
	@Column(name = "DATA_ABERTURA")
	private Date dataAbertura;
	
	@Column(name = "DATA_ENCERRAMENTO")
	private Date dataEncerramento;
	
	public ContaBancariaModel() { }

	public Long getCodigo() {
		return codigo;
	}

	public TipoContaBancariaEnumeration getTipoContaBancariaEnumeration() {
		return tipoContaBancariaEnumeration;
	}

	public void setTipoContaBancariaEnumeration(TipoContaBancariaEnumeration tipoContaBancariaEnumeration) {
		this.tipoContaBancariaEnumeration = tipoContaBancariaEnumeration;
	}

	public PessoaModel getPessoaInstituicaoFinanceira() {
		return pessoaInstituicaoFinanceira;
	}

	public void setPessoaInstituicaoFinanceira(PessoaModel pessoaInstituicaoFinanceira) {
		this.pessoaInstituicaoFinanceira = pessoaInstituicaoFinanceira;
	}

	public PessoaModel getPessoaTitular() {
		return pessoaTitular;
	}

	public void setPessoaTitular(PessoaModel pessoaTitular) {
		this.pessoaTitular = pessoaTitular;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNumeroAgencia() {
		return numeroAgencia;
	}

	public void setNumeroAgencia(String numeroAgencia) {
		this.numeroAgencia = numeroAgencia;
	}

	public String getNumeroConta() {
		return numeroConta;
	}

	public void setNumeroConta(String numeroConta) {
		this.numeroConta = numeroConta;
	}

	public Date getDataAbertura() {
		return dataAbertura;
	}

	public void setDataAbertura(Date dataAbertura) {
		this.dataAbertura = dataAbertura;
	}

	public Date getDataEncerramento() {
		return dataEncerramento;
	}

	public void setDataEncerramento(Date dataEncerramento) {
		this.dataEncerramento = dataEncerramento;
	}

}
