import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

   // id: number;

    @IsString()
    name!: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    price!: number;

    @IsInt()
    @IsPositive()
    @Type(() => Number)
    stock!: number

    @IsString()
    @IsOptional()
    category?: string;

}

