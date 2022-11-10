import { ApiProperty } from '@nestjs/swagger';
import {Model, Table, Column, DataType, BelongsToMany} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';


interface UserCreationAttrs {
	email: string,
	password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
	@Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
	id: number;

	@ApiProperty({example: 'some@email.com', description: 'Почтовый адрес пользователя'})
	@Column({type:DataType.STRING, unique: true, allowNull: false})
	email: string;

	@ApiProperty({example: '12345678', description: 'Пароль'})
	@Column({type:DataType.STRING, allowNull: false})
	password: string;

	@ApiProperty({example: 'false', description: 'Забанен ли пользователь'})
	@Column({type:DataType.BOOLEAN, defaultValue: false, allowNull: false})
	banned: boolean;

	@ApiProperty({example: '', description: 'Причина бана'})
	@Column({type:DataType.STRING, unique: false, allowNull: true})
	banReason: string;

	@BelongsToMany(() => Role, () => UserRoles)
	roles: Role[]
}