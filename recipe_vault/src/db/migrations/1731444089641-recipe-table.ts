import { MigrationInterface, QueryRunner } from "typeorm";

export class RecipeTable1731444089641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(`
            CREATE TABLE recipe (
                id uuid NOT NULL DEFAULT uuid_generate_v4(),
                user_id uuid,
                nome varchar(50) NOT NULL,
                ingredientes text[] NOT NULL,
                modo_preparo varchar(512) NOT NULL,
                tempo_preparo integer NOT NULL,
                dificuldade varchar(10) NOT NULL,
                popularidade integer NOT NULL,
                isativo boolean NOT NULL DEFAULT TRUE,
                CONSTRAINT recipe_pk PRIMARY KEY (id),
                CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE SET NULL
            );
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS recipe;`);
    }

}
