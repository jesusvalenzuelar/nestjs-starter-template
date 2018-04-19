import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.use(bodyParser.json());
    const port = process.env.PORT || '3000';
    app.enableCors();    

    await app.listen(port);
    
    console.info(`Server started and running on port ${port}`);
}

bootstrap();
