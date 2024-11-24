import { Module } from '@nestjs/common';
import { ReceitaController } from './receita.controller';
import { ReceitaService } from './receita.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from 'src/db/entities/recipes.entity';
import { UsersModule } from 'src/users/users.module';
import { UserEntity } from 'src/db/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeEntity, UserEntity]), UsersModule],
  controllers: [ReceitaController],
  providers: [ReceitaService]
})
export class ReceitaModule {}
