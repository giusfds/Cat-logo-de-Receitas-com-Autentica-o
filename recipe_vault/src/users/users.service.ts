import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from './users.dto';
import {hashSync as bcryptHashSync} from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ) { }

    async findByUsername(username: string): Promise<UserDTO | null>{
        const userFound = await this.usersRepository.findOne({
            where: {username}
        })

        if(!userFound){
           return null;
        }

        return {
            id: userFound.id,
            username: userFound.username,
            password: userFound.passwordHash,
            email: userFound.email
        }
    }
    

    async create(newUser: UserDTO){
        const userAlreadyRegistered = await this.findByUsername(newUser.username);

        if(userAlreadyRegistered){
            throw new ConflictException(`User '${newUser.username}' already registered`)
        }

        const dbUser = new UserEntity();

        dbUser.username = newUser.username;
        dbUser.email = newUser.email;
        dbUser.passwordHash = bcryptHashSync(newUser.password, 10);


        const {id, username} = await this.usersRepository.save(dbUser);

        return true;
    }


    async deleteUser(username: string){
        const foundUser = await this.findByUsername(username);

        if(!foundUser){
            throw new NotFoundException;
        }

        const result = await this.usersRepository.delete(foundUser.id);

        if(!result.affected){
            throw new BadRequestException;
        }

        return true;    
    }

    async updateUser(newUser: UserDTO): Promise<UserDTO | null> {
        const result = await this.usersRepository.update(newUser.id, newUser);
    
        if (!result.affected) {
            throw new NotFoundException(`User with ID ${newUser.id} not found`);
        }
    
        const updatedUser = await this.findByUsername(newUser.username);
    
        if (!updatedUser) {
            throw new NotFoundException(`User with ID ${newUser.id} not found after update`);
        }
    
        return updatedUser;
    }
}
