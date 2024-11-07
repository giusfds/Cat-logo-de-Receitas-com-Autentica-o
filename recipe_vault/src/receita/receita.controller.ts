import { Body, Controller, Post } from '@nestjs/common';
import { receita } from './receita.dto';
import { ReceitaService } from './receita.service';

@Controller('receita')
export class ReceitaController {
    constructor(private readonly receitaService: ReceitaService) {}

    @Post('criar')
    criarReceita(@Body()receita: receita): string{
        this.receitaService.criarReceita(receita);
        return 'Receita criada';
    }
}
