package digital.quintino.sistemafinanceiroapi.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name ="TB_LANCAMENTO_FINANCEIRO_PARCELAMENTO")
public class LancamentoFinanceiroParcelamentoModel implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;

	@ManyToOne
	@JoinColumn(name = "ID_LANCAMENTO_FINANCEIRO")
	private LancamentoFinanceiroModel lancamentoFinanceiroModel;

	@ManyToOne
	@JoinColumn(name = "ID_PARCELAMENTO")
	private ParcelamentoDomain parcelamentoDomain;

	public LancamentoFinanceiroParcelamentoModel() { }

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public LancamentoFinanceiroModel getLancamentoFinanceiroModel() {
		return lancamentoFinanceiroModel;
	}

	public void setLancamentoFinanceiroModel(LancamentoFinanceiroModel lancamentoFinanceiroModel) {
		this.lancamentoFinanceiroModel = lancamentoFinanceiroModel;
	}

	public ParcelamentoDomain getParcelamentoDomain() {
		return parcelamentoDomain;
	}

	public void setParcelamentoDomain(ParcelamentoDomain parcelamentoDomain) {
		this.parcelamentoDomain = parcelamentoDomain;
	}

}
