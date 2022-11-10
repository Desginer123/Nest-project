import { Controller, Body, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}
	
	@ApiOperation({summary: 'Создание пользователя'})
	@ApiResponse({status: 200, type: User})
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.usersService.createUser(userDto)
	}
	@ApiOperation({summary: 'Получение всех пользователей'})
	@ApiResponse({status: 200, type: [User]})
	@Get()
	getAll() {
		return this.usersService.getAllUsers()
	}
}
