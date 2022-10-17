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
		
			this.pessoaRepository.saveAll(Arrays.asList(pessoaModel1, pessoaModel2, pessoaModel3));
			
		TipoTelefoneDomain tipoTelefoneDomain1 = new TipoTelefoneDomain("Móvel");
		
			this.tipoTelefoneInterfaceRepository.save(tipoTelefoneDomain1);
			
		TelefoneDomain telefoneDomain1 = new TelefoneDomain(tipoTelefoneDomain1, pessoaModel1, "99", "999999999", true, true, true);
		
		TelefoneDomain telefoneDomain2 = new TelefoneDomain(tipoTelefoneDomain1, pessoaModel1, "88", "888888888", false, true, true);
			
			pessoaModel1.setTelefone(telefoneDomain1);
			pessoaModel1.setTelefone(telefoneDomain2);
			
				this.pessoaRepository.save(pessoaModel1);
			
	}

}
