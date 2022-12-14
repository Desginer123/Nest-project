import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/roles-auth.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';
import { RoleGuard } from '../auth/roles.guard';

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
	@UseGuards(JwtAuthGuard)
	@Roles('ADMIN')
	@UseGuards(RoleGuard)
	@Get()
	getAll() {
		return this.usersService.getAllUsers()
	}
}
