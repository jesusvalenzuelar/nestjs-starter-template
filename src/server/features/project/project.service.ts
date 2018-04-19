import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProjectCreateDto, Project, ProjectListDto } from '../../common/data';
import { TOKENS } from '../../constants';

@Component()
export class ProjectService {

    constructor(
        @Inject(TOKENS.ProjectRepositoryToken) private readonly projectRepository: Repository<Project>) {
    }

    findAll() {
        return this.projectRepository.find();
    }

    save(entity: ProjectCreateDto) {

        if (!entity) {
            throw new Error("entity is null");
        }

        const project: Project = <Project>entity;

        return this.projectRepository.save(entity);
    }

    async findOne(id: number): Promise<ProjectListDto> {
        const entity = await this.projectRepository.findOneById(id);

        return <ProjectListDto>entity;
    }

    async delete(id: number) {
        return await this.projectRepository.deleteById(id);
    }

    async update(id: number, model: ProjectCreateDto) {
        return await this.projectRepository.updateById(id, model);
    }
}