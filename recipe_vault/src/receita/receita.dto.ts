import { ArrayMaxSize, ArrayMinSize, IsArray, IsEnum, IsNumber, IsOptional, IsString,IsUUID, Length, MaxLength, MinLength } from "class-validator";

export enum dificuldadeEnum{
    FACIL = 'FACIL',
    MEDIO = 'MEDIO',
    DIFICIL = 'DIFICIL'
}

export class receita{
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    nome: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({each: true})
    @Length(3, 256, {each: true})
    ingredientes: string[];

    @IsString()
    @MinLength(3)
    @MaxLength(512)
    modo_preparo: string;

    @IsNumber()
    tempo_preparo: number;

    @IsEnum(dificuldadeEnum)
    dificuldade: string;

    @IsNumber()
    popularidade: number;
}