import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectCreateDto, ProjectListDto } from '../../common/data';
import { ServerResponse } from 'http';

@Controller('api/projects')
export class ProjectsController {

    constructor(private readonly projectService: ProjectService) {
    }

    @Get()
    async getProjects() {
        return await this.projectService.findAll();
    }

    @Get(':id')
    async getProject(@Param() params: any, @Res() res) {
        console.log("Requesting project with id: ", params.id);
        const id = parseInt(params.id);

        const entity = await this.projectService.findOne(id);

        if (!entity) {
            res.status(HttpStatus.NOT_FOUND).send();
        }

        const dto = <ProjectListDto>entity;

        res.status(HttpStatus.OK).json(dto);
    }

    @Post()
    async createProject(@Body() project: ProjectCreateDto, @Res() res) {
        if (!project) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Request body is empty' });
        }

        try {
            const entity = await this.projectService.save(project);
            res.status(HttpStatus.CREATED).json(entity);
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: error.Message || error.message });
        }
    }
}
