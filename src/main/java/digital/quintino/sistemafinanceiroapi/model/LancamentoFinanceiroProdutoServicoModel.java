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
@Table(name ="TB_LANCAMENTO_FINANCEIRO_PRODUTO_SERVICO")
public class LancamentoFinanceiroProdutoServicoModel implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name = "ID_LANCAMENTO_FINANCEIRO")
	private LancamentoFinanceiroModel lancamentoFinanceiroModel;
	
	@ManyToOne
	@JoinColumn(name = "ID_PRODUTO_SERVICO")
	private ProdutoServicoModel produtoServicoModel;
	
	public LancamentoFinanceiroProdutoServicoModel() { }

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

	public ProdutoServicoModel getProdutoServicoModel() {
		return produtoServicoModel;
	}

	public void setProdutoServicoModel(ProdutoServicoModel produtoServicoModel) {
		this.produtoServicoModel = produtoServicoModel;
	} 

}
