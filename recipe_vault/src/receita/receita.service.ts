import { BadRequestException, ImATeapotException, 
        Injectable, NotFoundException 
} from '@nestjs/common';
import { receita          } from './receita.dto';
import { RecipeEntity     } from 'src/db/entities/recipes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository       } from 'typeorm';
import { UsersService     } from 'src/users/users.service';
import { UserEntity       } from 'src/db/entities/user.entity';

@Injectable()
export class ReceitaService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
        @InjectRepository(RecipeEntity)
        private readonly recipeRepository: Repository<RecipeEntity>,
        private readonly users: UsersService
    ) {}

    async edit(receita: receita, id: string): Promise<receita | null> {
        const foundRecipe = await this.findRecipeById(id);
        console.log(foundRecipe);

        if (!foundRecipe) {
            throw new Error('Campos obrigatórios estão faltando');
        }

        foundRecipe.nome          = receita.nome;
        foundRecipe.ingredientes  = receita.ingredientes;
        foundRecipe.modo_preparo  = receita.modo_preparo;
        foundRecipe.popularidade  = receita.popularidade;
        foundRecipe.tempo_preparo = receita.tempo_preparo;
        foundRecipe.dificuldade   = receita.dificuldade;

        console.log(foundRecipe + "Atualizada");

        return await this.recipeRepository.save(foundRecipe);
    }

    async create(receita: receita, username: string) {
        const dbRecipe = new RecipeEntity();

        const foundUser = await this.users.findByUsername(username);

        if (!foundUser || foundUser.username !== username) {
            throw new ImATeapotException('Usuário inválido');
        }

        const userEntity = new UserEntity();
        userEntity.id           = foundUser.id;
        userEntity.username     = foundUser.username;
        userEntity.email        = foundUser.email;
        userEntity.passwordHash = foundUser.password;

        dbRecipe.nome           = receita.nome;
        dbRecipe.ingredientes   = receita.ingredientes;
        dbRecipe.modo_preparo   = receita.modo_preparo;
        dbRecipe.tempo_preparo  = receita.tempo_preparo;
        dbRecipe.dificuldade    = receita.dificuldade;
        dbRecipe.popularidade   = receita.popularidade;
        dbRecipe.user           = userEntity;
        dbRecipe.isativo        = true;

        const { id, nome } = await this.recipeRepository.save(dbRecipe);

        return { id, nome };
    }

    async findAllbyUser(username: string) {
        const foundUser = await this.users.findByUsername(username);
        console.log(foundUser);
        if (!foundUser || foundUser.username !== username) {
            throw new ImATeapotException('Usuário não encontrado');
        }

        const userWithRecipes = await this.usersRepository.findOne({
            where: { id: foundUser.id },
            relations: ['recipes'],
        });

        if (!userWithRecipes) {
            throw new NotFoundException('Receitas não encontradas');
        }

        // Filtrar apenas receitas ativas
        const activeRecipes = userWithRecipes.recipes.filter(recipe => recipe.isativo);
        console.log(activeRecipes);
        return activeRecipes;
    }

    async softDeleteRecipe(receita: string): Promise<boolean> {
        const foundRecipe = await this.findRecipeByName(receita);
        console.log(foundRecipe);
        // Verificar se a receita foi encontrada
        if (!foundRecipe) {
            throw new BadRequestException('Receita não encontrada');
        }

        // Atualizar o campo isAtivo para false
        foundRecipe.isativo = false;
        
        await this.recipeRepository.save(foundRecipe);

        return true;
    }

    async findRecipeByName(name: string, includeInactive = false): Promise<receita | null> {
        const condition = includeInactive 
            ? { nome: name } 
            : { nome: name, isativo: true };

        const foundRecipe = await this.recipeRepository.findOne({ where: condition });

        if (!foundRecipe) {
            throw new NotFoundException('Receita não encontrada');
        }

        return {
            id            :  foundRecipe.id,
            nome          :  foundRecipe.nome,
            ingredientes  :  foundRecipe.ingredientes,
            modo_preparo  :  foundRecipe.modo_preparo,
            tempo_preparo :  foundRecipe.tempo_preparo,
            dificuldade   :  foundRecipe.dificuldade,
            popularidade  :  foundRecipe.popularidade,
            isativo       :  foundRecipe.isativo,
        };
    }

    async findRecipeById(id: string, includeInactive = false): Promise<receita | null> {
        const condition = includeInactive 
            ? { id } 
            : { id, isativo: true };

        const foundRecipe = await this.recipeRepository.findOne({ where: condition });

        if (!foundRecipe) {
            throw new NotFoundException('Receita não encontrada');
        }

        return {
            id             :  foundRecipe.id,
            nome           :  foundRecipe.nome,
            ingredientes   :  foundRecipe.ingredientes,
            modo_preparo   :  foundRecipe.modo_preparo,
            tempo_preparo  :  foundRecipe.tempo_preparo,
            dificuldade    :  foundRecipe.dificuldade,
            popularidade   :  foundRecipe.popularidade,
            isativo        :  foundRecipe.isativo,
        };
    }
}
