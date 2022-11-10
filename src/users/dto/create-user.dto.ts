import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
	@ApiProperty({example: 'email@email.com', description: 'Почтовый адрес'})
	readonly email: string;
	@ApiProperty({example: '12345678', description: 'Пароль'})
	readonly passworde: string
}