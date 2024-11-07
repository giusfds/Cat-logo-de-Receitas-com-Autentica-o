import { Injectable } from '@nestjs/common';
import { receita } from './receita.dto';

@Injectable()
export class ReceitaService {
    receitas: receita[] = [];

    criarReceita(receita: receita): string{
        this.receitas.push(receita);
        console.log(this.receitas);
        return 'Receita criada';
    }
}
