package digital.quintino.sistemafinanceiroapi.model;

import digital.quintino.sistemafinanceiroapi.enumeration.TipoFormaPagamentoEnumeration;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TB_PAGAMENTO")
public class PagamentoModel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CODIGO")
    private Long codigo;

    @ManyToOne
    @JoinColumn(name = "ID_TIPO_PAGAMENTO", nullable = false)
    private TipoPagamentoModel tipoPagamentoModel;

    @ManyToOne
    @JoinColumn(name = "ID_PESSOA_FONTE_PAGAMENTO", nullable = false)
    private PessoaModel pessoaFontePagamento;

    @ManyToOne
    @JoinColumn(name = "ID_CONTA_BANCARIA", nullable = false)
    private ContaBancariaModel contaBancariaModel;

    @Enumerated(EnumType.STRING)
    @Column(name = "DESCRICAO_FORMA_PAGAMENTO")
    private TipoFormaPagamentoEnumeration tipoFormaPagamentoEnumeration;

    @Column(name = "DATA_VENCIMENTO", nullable = false)
    private Date dataVencimento;

    @Column(name = "DATA_PAGAMENTO")
    private Date dataPagamento;

    @Column(name = "VALOR_PAGAMENTO")
    private Double valorPagamento;

    public PagamentoModel() { }

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public TipoPagamentoModel getTipoPagamentoModel() {
        return tipoPagamentoModel;
    }

    public void setTipoPagamentoModel(TipoPagamentoModel tipoPagamentoModel) {
        this.tipoPagamentoModel = tipoPagamentoModel;
    }

    public PessoaModel getPessoaFontePagamento() {
        return pessoaFontePagamento;
    }

    public void setPessoaFontePagamento(PessoaModel pessoaFontePagamento) {
        this.pessoaFontePagamento = pessoaFontePagamento;
    }

    public ContaBancariaModel getContaBancariaModel() {
        return contaBancariaModel;
    }

    public void setContaBancariaModel(ContaBancariaModel contaBancariaModel) {
        this.contaBancariaModel = contaBancariaModel;
    }

    public TipoFormaPagamentoEnumeration getTipoFormaPagamentoEnumeration() {
        return tipoFormaPagamentoEnumeration;
    }

    public void setTipoFormaPagamentoEnumeration(TipoFormaPagamentoEnumeration tipoFormaPagamentoEnumeration) {
        this.tipoFormaPagamentoEnumeration = tipoFormaPagamentoEnumeration;
    }

    public Date getDataVencimento() {
        return dataVencimento;
    }

    public void setDataVencimento(Date dataVencimento) {
        this.dataVencimento = dataVencimento;
    }

    public Date getDataPagamento() {
        return dataPagamento;
    }

    public void setDataPagamento(Date dataPagamento) {
        this.dataPagamento = dataPagamento;
    }

    public Double getValorPagamento() {
        return valorPagamento;
    }

    public void setValorPagamento(Double valorPagamento) {
        this.valorPagamento = valorPagamento;
    }

}
