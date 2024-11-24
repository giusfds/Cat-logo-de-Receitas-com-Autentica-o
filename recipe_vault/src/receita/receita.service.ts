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

    async edit(receita: receita, id: string) : Promise<receita>{
        const foundRecipe = await this.findRecipeById(id);

        if(!foundRecipe) {
            throw new Error('Campos obrigatórios estão faltando');
        }
        await this.recipeRepository.delete(id);
        
        foundRecipe.nome = receita.nome;
        foundRecipe.ingredientes = receita.ingredientes;
        foundRecipe.modo_preparo = receita.modo_preparo;
        foundRecipe.popularidade = receita.popularidade;
        foundRecipe.tempo_preparo = receita.tempo_preparo;
        foundRecipe.dificuldade = receita.dificuldade;

        console.log(foundRecipe + "Atualizada");

        return await this.recipeRepository.save(foundRecipe);
    }   

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

    async deleteRecipe(receita: string): Promise<boolean | null>{
        const foundRecipe = await this.findRecipeByName(receita);

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

    async findRecipeById(id: string): Promise<receita | null>{
        const foundRecipe = await this.recipeRepository.findOne({where: { id }});

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
