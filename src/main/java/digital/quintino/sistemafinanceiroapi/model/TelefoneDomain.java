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
@Table(name = "TB_TELEFONE")
public class TelefoneDomain implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name = "ID_TIPO_TELEFONE")
	private TipoTelefoneDomain tipoTelefoneDomain;
	
	@ManyToOne
	@JoinColumn(name = "ID_PESSOA", referencedColumnName = "codigo", nullable = false)
	private PessoaModel pessoaModel;
	
	@Column(name = "DDD", nullable = false)
	private String ddd;
	
	@Column(name = "NUMERO", unique = true, nullable = false)
	private String numero;
	
	@Column(name = "IS_PRINCIPAL", nullable = false)
	private Boolean isPrincipal;
	
	@Column(name = "IS_APLICATIVO_MENSAGEM", nullable = false)
	private Boolean isAplicativoMensagem;
	
	@Column(name = "IS_ATIVO", nullable = false)
	private Boolean isAtivo;
	
	public TelefoneDomain() { }

	public TelefoneDomain(TipoTelefoneDomain tipoTelefoneDomain, String ddd, String numero) {
		this.tipoTelefoneDomain = tipoTelefoneDomain;
		this.ddd = ddd;
		this.numero = numero;
	}

	public TelefoneDomain(TipoTelefoneDomain tipoTelefoneDomain, PessoaModel pessoaModel, String ddd, String numero, Boolean isPrincipal, Boolean isAplicativoMensagem, Boolean isAtivo) {
		this.tipoTelefoneDomain = tipoTelefoneDomain;
		this.pessoaModel = pessoaModel;
		this.ddd = ddd;
		this.numero = numero;
		this.isPrincipal = isPrincipal;
		this.isAplicativoMensagem = isAplicativoMensagem;
		this.isAtivo = isAtivo;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public TipoTelefoneDomain getTipoTelefoneDomain() {
		return tipoTelefoneDomain;
	}

	public void setTipoTelefoneDomain(TipoTelefoneDomain tipoTelefoneDomain) {
		this.tipoTelefoneDomain = tipoTelefoneDomain;
	}

	public PessoaModel getPessoaModel() {
		return pessoaModel;
	}

	public void setPessoaModel(PessoaModel pessoaModel) {
		this.pessoaModel = pessoaModel;
	}

	public String getDdd() {
		return ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public Boolean getIsPrincipal() {
		return isPrincipal;
	}

	public void setIsPrincipal(Boolean isPrincipal) {
		this.isPrincipal = isPrincipal;
	}

	public Boolean getIsAplicativoMensagem() {
		return isAplicativoMensagem;
	}

	public void setIsAplicativoMensagem(Boolean isAplicativoMensagem) {
		this.isAplicativoMensagem = isAplicativoMensagem;
	}

	public Boolean getIsAtivo() {
		return isAtivo;
	}

	public void setIsAtivo(Boolean isAtivo) {
		this.isAtivo = isAtivo;
	}

}
