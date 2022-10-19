package digital.quintino.sistemafinanceiroapi.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_TIPO_PAGAMENTO")
public class TipoPagamentoModel implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODIGO")
	private Long codigo;

	@Column(name = "DESCRICAO", length = 100, unique = true, nullable = false)
	private String descricao;

	public TipoPagamentoModel() { }

	public TipoPagamentoModel(String descricao) {
		this.descricao = descricao;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
