package digital.quintino.sistemafinanceiroapi.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import digital.quintino.sistemafinanceiroapi.enumerated.TipoLancamentoFinanceiroEnumerated;

@Entity
@Table(name ="TB_LANCAMENTO_FINANCEIRO")
public class LancamentoFinanceiroModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "ID_TIPO_LANCAMENTO_FINANCEIRO")
	private TipoLancamentoFinanceiroEnumerated tipoLancamentoFinanceiroEnumerated;
	
	@Column(name = "IDENTIFICADOR", nullable = false)
	private String identificador;
	
	@Column(name = "NUMERO_PARCELAMENTO", nullable = false)
	private Integer numeroParcelamento;
	
	@Column(name = "VALOR_TOTAL", nullable = false)
	private Double valorTotal;
	
	@Column(name = "DIA_VENCIMENTO", nullable = false)
	private Integer diaVencimento;
	
	@Column(name = "OBSERVACAO", nullable = false)
	private String observacao;
	
	public LancamentoFinanceiroModel() { }

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public TipoLancamentoFinanceiroEnumerated getTipoLancamentoFinanceiroEnumerated() {
		return tipoLancamentoFinanceiroEnumerated;
	}

	public void setTipoLancamentoFinanceiroEnumerated(
			TipoLancamentoFinanceiroEnumerated tipoLancamentoFinanceiroEnumerated) {
		this.tipoLancamentoFinanceiroEnumerated = tipoLancamentoFinanceiroEnumerated;
	}

	public String getIdentificador() {
		return identificador;
	}

	public void setIdentificador(String identificador) {
		this.identificador = identificador;
	}

	public Integer getNumeroParcelamento() {
		return numeroParcelamento;
	}

	public void setNumeroParcelamento(Integer numeroParcelamento) {
		this.numeroParcelamento = numeroParcelamento;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Integer getDiaVencimento() {
		return diaVencimento;
	}

	public void setDiaVencimento(Integer diaVencimento) {
		this.diaVencimento = diaVencimento;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

}
