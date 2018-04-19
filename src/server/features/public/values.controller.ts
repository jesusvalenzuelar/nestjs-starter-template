import {Controller, Get} from '@nestjs/common';

@Controller('api/values')
export class ValuesController {
    
    @Get()
    public getValues() {
        return ['value 1', 'value 2', 'value 3'];
    }
}