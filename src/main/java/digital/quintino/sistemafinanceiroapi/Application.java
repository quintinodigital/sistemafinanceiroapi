package digital.quintino.sistemafinanceiroapi;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import digital.quintino.sistemafinanceiroapi.enumerated.TipoLancamentoFinanceiroEnumerated;
import digital.quintino.sistemafinanceiroapi.enumeration.TipoContaBancariaEnumeration;
import digital.quintino.sistemafinanceiroapi.model.ContaBancariaModel;
import digital.quintino.sistemafinanceiroapi.model.DocumentoModel;
import digital.quintino.sistemafinanceiroapi.model.LancamentoFinanceiroModel;
import digital.quintino.sistemafinanceiroapi.model.LancamentoFinanceiroProdutoServicoModel;
import digital.quintino.sistemafinanceiroapi.model.PessoaModel;
import digital.quintino.sistemafinanceiroapi.model.ProdutoServicoModel;
import digital.quintino.sistemafinanceiroapi.model.TelefoneDomain;
import digital.quintino.sistemafinanceiroapi.model.TipoDocumentoModel;
import digital.quintino.sistemafinanceiroapi.model.TipoPessoaModel;
import digital.quintino.sistemafinanceiroapi.model.TipoTelefoneDomain;
import digital.quintino.sistemafinanceiroapi.repository.ContaBancariaInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.LancamentoFinanceiroProdutoServicoInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.PessoaInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.ProdutoServicoInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TipoDocumentoInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TipoPessoaInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TipoTelefoneInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.service.LancamentoFinanceiroService;

@SpringBootApplication
public class Application implements CommandLineRunner {
	
	@Autowired
	private TipoPessoaInterfaceRepository tipoPessoaRepository;
	
	@Autowired
	private PessoaInterfaceRepository pessoaRepository;
	
	@Autowired
	private TipoTelefoneInterfaceRepository tipoTelefoneInterfaceRepository;
	
	@Autowired
	private TipoDocumentoInterfaceRepository tipoDocumentoInterfaceRepository;
	
	@Autowired
	private ContaBancariaInterfaceRepository contaBancariaInterfaceRepository;
	
	@Autowired
	private ProdutoServicoInterfaceRepository produtoServicoInterfaceRepository;
	
	@Autowired
	private LancamentoFinanceiroService lancamentoFinanceiroService;
	
	@Autowired
	private LancamentoFinanceiroProdutoServicoInterfaceRepository lancamentoFinanceiroProdutoServicoInterfaceRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		TipoPessoaModel tipoPessoaModel1 = new TipoPessoaModel("Pessoa Física");
		TipoPessoaModel tipoPessoaModel2 = new TipoPessoaModel("Pessoa Jurídica");
			
			this.tipoPessoaRepository.saveAll(Arrays.asList(tipoPessoaModel1, tipoPessoaModel2));
			
		PessoaModel pessoaModel1 = new PessoaModel(tipoPessoaModel1, "Quester Puausbe Tuan Beaur");
		PessoaModel pessoaModel2 = new PessoaModel(tipoPessoaModel1, "Assoe Laoes Roece Pioza");
		PessoaModel pessoaModel3 = new PessoaModel(tipoPessoaModel2, "Quester Puausbe Tuan Beaur Digital");
		PessoaModel pessoaModel4 = new PessoaModel(tipoPessoaModel1, "Banco do Brasil");
		
			this.pessoaRepository.saveAll(Arrays.asList(pessoaModel1, pessoaModel2, pessoaModel3, pessoaModel4));
			
		TipoTelefoneDomain tipoTelefoneDomain1 = new TipoTelefoneDomain("Móvel");
		
			this.tipoTelefoneInterfaceRepository.save(tipoTelefoneDomain1);
			
		TelefoneDomain telefoneDomain1 = new TelefoneDomain(tipoTelefoneDomain1, pessoaModel1, "99", "999999999", true, true, true);
		
		TelefoneDomain telefoneDomain2 = new TelefoneDomain(tipoTelefoneDomain1, pessoaModel1, "88", "888888888", false, true, true);
			
			pessoaModel1.setTelefone(telefoneDomain1);
			pessoaModel1.setTelefone(telefoneDomain2);
			
				this.pessoaRepository.save(pessoaModel1);
				
		TipoDocumentoModel tipoDocumentoModel1 = new TipoDocumentoModel("CPF");
		TipoDocumentoModel tipoDocumentoModel2 = new TipoDocumentoModel("CNPJ");
		
			this.tipoDocumentoInterfaceRepository.saveAll(Arrays.asList(tipoDocumentoModel1, tipoDocumentoModel2));
		
		DocumentoModel documentoModel1 = new DocumentoModel(tipoDocumentoModel2, "43247391000156");
			
			pessoaModel3.setDocumento(documentoModel1);
			
			this.pessoaRepository.save(pessoaModel3);
			
		LancamentoFinanceiroModel lancamentoFinanceiroModel1 = new LancamentoFinanceiroModel();
			lancamentoFinanceiroModel1.setDiaVencimento(10);
			lancamentoFinanceiroModel1.setIdentificador("REC0012022FIX");
			lancamentoFinanceiroModel1.setNumeroParcelamento(12);
			lancamentoFinanceiroModel1.setObservacao("");
			lancamentoFinanceiroModel1.setTipoLancamentoFinanceiroEnumerated(TipoLancamentoFinanceiroEnumerated.RECEITA_FIXA);
			lancamentoFinanceiroModel1.setValorTotal(48000D);
			
			this.lancamentoFinanceiroService.saveOne(lancamentoFinanceiroModel1);
			
		ProdutoServicoModel produtoServicoModel1 = new ProdutoServicoModel("Salário CLT");
		
			this.produtoServicoInterfaceRepository.save(produtoServicoModel1);
			
		LancamentoFinanceiroProdutoServicoModel lancamentoFinanceiroProdutoServicoModel1 = new LancamentoFinanceiroProdutoServicoModel();
			lancamentoFinanceiroProdutoServicoModel1.setLancamentoFinanceiroModel(lancamentoFinanceiroModel1);
			lancamentoFinanceiroProdutoServicoModel1.setProdutoServicoModel(produtoServicoModel1);
			
			this.lancamentoFinanceiroProdutoServicoInterfaceRepository.save(lancamentoFinanceiroProdutoServicoModel1);
			
		ContaBancariaModel contaBancariaModel1 = new ContaBancariaModel();
			contaBancariaModel1.setDataAbertura(null);
			contaBancariaModel1.setDataEncerramento(null);
			contaBancariaModel1.setNumeroAgencia("0826-5");
			contaBancariaModel1.setNumeroConta("71.746-0");
			contaBancariaModel1.setPessoaInstituicaoFinanceira(pessoaModel4);
			contaBancariaModel1.setPessoaTitular(pessoaModel1);
			contaBancariaModel1.setTipoContaBancariaEnumeration(TipoContaBancariaEnumeration.CONTA_CORRENTE);
			
			this.contaBancariaInterfaceRepository.save(contaBancariaModel1);
			
	}

}
