import { Body, Controller, Delete,Post, Get, UseGuards, Param } from '@nestjs/common';
import { receita } from './receita.dto';
import { ReceitaService } from './receita.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('receita')
export class ReceitaController {
    constructor(private readonly receitaService: ReceitaService) {}

    @Post('criar')
    async criarReceita(@Body()receita: receita, @Body('username') username: string){
        return await this.receitaService.create(receita, username);
    }

    @Get('list/:username')
    async findAllbyUser(@Param('username') username: string){
        return await this.receitaService.findAllbyUser(username);
    }

    @Delete()
    async deleteRecipe(@Body() recipe: receita){
        return await this.receitaService.deleteRecipe(recipe);
    }

}
