import { Connection } from 'typeorm';
import { TOKENS } from '../../constants';

export class TypeORMProvider {
    static create<T>(tokenName: string, ctor: {new(): T}) {        
        return [
            {
                provide: TOKENS[tokenName],
                useFactory: (connection: Connection) => connection.getRepository(ctor),
                inject: TOKENS.inject
            }
        ];
    }
}