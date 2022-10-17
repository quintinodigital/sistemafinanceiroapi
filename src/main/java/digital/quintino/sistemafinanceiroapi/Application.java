package digital.quintino.sistemafinanceiroapi;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import digital.quintino.sistemafinanceiroapi.model.PessoaModel;
import digital.quintino.sistemafinanceiroapi.model.TelefoneDomain;
import digital.quintino.sistemafinanceiroapi.model.TipoPessoaModel;
import digital.quintino.sistemafinanceiroapi.model.TipoTelefoneDomain;
import digital.quintino.sistemafinanceiroapi.repository.PessoaInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TelefoneInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TipoPessoaInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TipoTelefoneInterfaceRepository;

@SpringBootApplication
public class Application implements CommandLineRunner {
	
	@Autowired
	private TipoPessoaInterfaceRepository tipoPessoaRepository;
	
	@Autowired
	private PessoaInterfaceRepository pessoaRepository;
	
	@Autowired
	private TipoTelefoneInterfaceRepository tipoTelefoneInterfaceRepository;
	
	@Autowired
	private TelefoneInterfaceRepository telefoneInterfaceRepository;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		TipoPessoaModel tipoPessoaModel1 = new TipoPessoaModel("Pessoa Física");
		TipoPessoaModel tipoPessoaModel2 = new TipoPessoaModel("Pessoa Jurídica");
			
			this.tipoPessoaRepository.saveAll(Arrays.asList(tipoPessoaModel1, tipoPessoaModel2));
			
		PessoaModel pessoaModel1 = new PessoaModel(tipoPessoaModel1, "José Quintino");
		PessoaModel pessoaModel2 = new PessoaModel(tipoPessoaModel1, "Priscilla Mariano");
		PessoaModel pessoaModel3 = new PessoaModel(tipoPessoaModel2, "Quintino Digital");
		
			this.pessoaRepository.saveAll(Arrays.asList(pessoaModel1, pessoaModel2, pessoaModel3));
			
		TipoTelefoneDomain tipoTelefoneDomain1 = new TipoTelefoneDomain("Whatsapp");
		
			this.tipoTelefoneInterfaceRepository.save(tipoTelefoneDomain1);
			
		TelefoneDomain telefoneDomain1 = new TelefoneDomain(tipoTelefoneDomain1, "61", "996196506");
			telefoneDomain1.setPessoaModel(pessoaModel1);
			
		TelefoneDomain telefoneDomain2 = new TelefoneDomain(tipoTelefoneDomain1, "61", "995995532");
			telefoneDomain2.setPessoaModel(pessoaModel1);
			
			this.telefoneInterfaceRepository.saveAll(Arrays.asList(telefoneDomain1, telefoneDomain2));
			
			// Recuperar pessoa
			for(PessoaModel pessoaModelResultado : this.pessoaRepository.findAll()) {
				System.out.println(pessoaModelResultado.getCodigo());
				System.out.println(pessoaModelResultado.getTipoPessoaDomain().getDescricao());
				System.out.println(pessoaModelResultado.getNome());
			}
			
	}

}
