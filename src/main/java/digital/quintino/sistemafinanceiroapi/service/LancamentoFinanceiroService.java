package digital.quintino.sistemafinanceiroapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import digital.quintino.sistemafinanceiroapi.model.LancamentoFinanceiroModel;
import digital.quintino.sistemafinanceiroapi.repository.LancamentoFinanceiroInterfaceRepository;

@Service
public class LancamentoFinanceiroService {

	@Autowired
	private LancamentoFinanceiroInterfaceRepository lancamentoFinanceiroInterfaceRepository;
	
	public LancamentoFinanceiroModel saveOne(LancamentoFinanceiroModel lancamentoFinanceiroModel) {
		return lancamentoFinanceiroInterfaceRepository.save(lancamentoFinanceiroModel);
	}
	
}
