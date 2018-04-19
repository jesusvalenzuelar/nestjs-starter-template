import { Module } from '@nestjs/common';
import { ProjectModule } from './features/project';
import { PublicModule } from './features/public';

@Module({
    modules: [ProjectModule, PublicModule],
    controllers: []
})
export class ApplicationModule { }
