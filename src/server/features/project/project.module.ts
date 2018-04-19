import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { ProjectsController } from './project.controller';
import { ProjectService } from './project.service';
import { AuthenticationMiddleware } from '../../common/middlewares/authentication.middleware';
import { projectProvider } from './project.provider';
import { DatabaseModule } from '../../common/providers';

@Module({
    imports: [DatabaseModule],
    controllers: [ProjectsController],
    components: [
        ...projectProvider,
        ProjectService
    ],
    exports: [ProjectService]
})
export class ProjectModule implements NestModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(AuthenticationMiddleware)
            .forRoutes({
                path: 'api/projects/**',
                method: RequestMethod.ALL
            });
    }
}
