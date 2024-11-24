import { BadRequestException, ImATeapotException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { receita } from './receita.dto';
import { RecipeEntity } from 'src/db/entities/recipes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/db/entities/user.entity';
@Injectable()
export class ReceitaService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
        @InjectRepository(RecipeEntity)
        private readonly recipeRepository: Repository<RecipeEntity>,
        private readonly users: UsersService
    ) { }

    async create(receita: receita, username: string) {
        const dbRecipe = new RecipeEntity();

        const foundUser = await this.users.findByUsername(username);

        console.log(foundUser)

        if (!foundUser || foundUser.username != username) {
            throw new ImATeapotException;
        }

        const userEntity = new UserEntity();
        userEntity.id = foundUser.id;
        userEntity.username = foundUser.username;
        userEntity.email = foundUser.email;
        userEntity.passwordHash = foundUser.password;

        dbRecipe.nome = receita.nome;
        dbRecipe.ingredientes = receita.ingredientes;
        dbRecipe.modo_preparo = receita.modo_preparo;
        dbRecipe.tempo_preparo = receita.tempo_preparo;
        dbRecipe.dificuldade = receita.dificuldade;
        dbRecipe.popularidade = receita.popularidade;
        dbRecipe.user = userEntity;


        const { id, nome } = await this.recipeRepository.save(dbRecipe);

        return { id, nome };
    }

    async findAllbyUser(username: string){
        const foundUser = await this.users.findByUsername(username);

        if(!foundUser || foundUser.username != username){
            throw new ImATeapotException
        }
        const recipes = await this.usersRepository.findOne({where: {id: foundUser.id}, relations: ['recipes']});

        console.log(recipes);

        return recipes;
    }

    async deleteRecipe(receita: receita): Promise<boolean | null>{
        const foundRecipe = await this.findRecipeByName(receita.nome);

        const result = await this.recipeRepository.delete(foundRecipe.id);

        if(!result.affected){
            throw new BadRequestException;
        }

        return true;
    }

    async findRecipeByName(name: string): Promise<receita | null>{
        const foundRecipe = await this.recipeRepository.findOne({where: {nome: name}});

        if(!foundRecipe) {
            throw new NotFoundException;
        }

        return {
            id: foundRecipe.id,
            nome: foundRecipe.nome,
            ingredientes: foundRecipe.ingredientes,
            modo_preparo: foundRecipe.modo_preparo,
            tempo_preparo: foundRecipe.tempo_preparo,
            dificuldade: foundRecipe.dificuldade,
            popularidade: foundRecipe.popularidade
        }
    }
}   
