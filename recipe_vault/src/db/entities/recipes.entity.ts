import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'recipe'})
export class RecipeEntity{

    @PrimaryGeneratedColumn('uuid')   
    id?: string;

    @ManyToOne(() => UserEntity, user => user.recipes)
    @JoinColumn({name: 'user_id'})
    user: UserEntity;

    @Column({type: 'varchar'})
    nome: string;

    @Column("text", { array: true })
    ingredientes: string[];

    @Column({type: 'varchar'})
    modo_preparo: string;

    @Column({type: 'integer'})
    tempo_preparo: number;  

    @Column({type: 'varchar'})
    dificuldade: string;

    @Column({type: 'integer'})
    popularidade: number;

    @Column({type: 'boolean'})
    isativo: boolean;
}