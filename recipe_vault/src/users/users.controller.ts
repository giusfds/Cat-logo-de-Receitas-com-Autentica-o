import { Body ,Controller, Delete, Put ,Post, UseGuards, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './users.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){ }

    @HttpCode(201)
    @Post()
    create(@Body() user: UserDTO){
        return this.usersService.create(user)
    }

    @UseGuards(AuthGuard)
    @Delete()
    async delete(@Body('username') username: string){
        return this.usersService.deleteUser(username);
    }

    @UseGuards(AuthGuard)
    @Put()
    async update(@Body() newUser: UserDTO){
        return this.usersService.updateUser(newUser);
    }
}
