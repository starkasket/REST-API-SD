import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto.js';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
    @IsOptional()
    @IsUUID()
    id?: string;
}
