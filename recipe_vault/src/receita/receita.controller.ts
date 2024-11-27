import { Body, Controller, Delete, Post, Put, 
        Get, UseGuards, Param, BadRequestException } from '@nestjs/common';
import { receita } from './receita.dto';
import { ReceitaService } from './receita.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('receita')
export class ReceitaController {
    constructor(private readonly receitaService: ReceitaService) {}

    @Post('criar')
    async criarReceita(
        @Body() receita: receita, 
        @Body('username') username: string
    ) {
        if (!username) {
            throw new BadRequestException('O campo "username" é obrigatório.');
        }
        return await this.receitaService.create(receita, username);
    }

    @Get('list/:username')
    async findAllbyUser(@Param('username') username: string) {
        if (!username) {
            throw new BadRequestException('O parâmetro "username" é obrigatório.');
        }
        return await this.receitaService.findAllbyUser(username);
    }

    @Delete('/:nome')
    async deleteRecipe(@Param('nome') nome: string) {
        console.log(nome);
        if (!nome) {
            throw new BadRequestException('O parâmetro "nome" é obrigatório.');
        }
        return await this.receitaService.softDeleteRecipe(nome);
    }

    @Put()
    async editRecipe(
        @Body() receita: receita
    ) {
        return await this.receitaService.edit(receita, receita.id);
    }
}
