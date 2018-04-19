import { IsString, IsDate } from 'class-validator';

export class ProjectCreateDto {
    @IsString() readonly Nombre: string;
    @IsString() readonly Descripcion: string;
}
