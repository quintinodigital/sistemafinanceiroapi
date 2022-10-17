package digital.quintino.sistemafinanceiroapi;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import digital.quintino.sistemafinanceiroapi.model.PessoaModel;
import digital.quintino.sistemafinanceiroapi.model.TipoPessoaModel;
import digital.quintino.sistemafinanceiroapi.repository.PessoaInterfaceRepository;
import digital.quintino.sistemafinanceiroapi.repository.TipoPessoaInterfaceRepository;

@SpringBootApplication
public class Application implements CommandLineRunner {
	
	@Autowired
	private TipoPessoaInterfaceRepository tipoPessoaRepository;
	
	@Autowired
	private PessoaInterfaceRepository pessoaRepository;

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
		
	}

}
