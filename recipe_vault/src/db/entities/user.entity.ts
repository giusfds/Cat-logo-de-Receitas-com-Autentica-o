import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RecipeEntity } from "./recipes.entity";

@Entity({name: 'user'})
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')   
    id?: string;

    @Column({type: 'varchar'})
    username: string;

    @Column({type: 'varchar', name: 'password_hash'})
    passwordHash: string;

    @Column({type: 'varchar'})
    email: string;

    @OneToMany(() => RecipeEntity, recipe => recipe.user)
    recipes: RecipeEntity[];
}