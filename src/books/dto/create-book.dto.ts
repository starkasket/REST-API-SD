import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";


export class CreateBookDto {
    @IsString()
    title!: string;

    @IsString()
    author!: string;

    @IsNumber()
    @Type(() => Number)
    year!: number

    @IsString()
    genre!: string;

    @IsNumber()
    @Type(() => Number)
    price!: number
}
