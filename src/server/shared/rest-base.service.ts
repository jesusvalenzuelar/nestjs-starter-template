import { Repository } from "typeorm";

export interface IReadService<T> {

    GetAll(): Promise<T[]>;

    Get(id: number): Promise<T>;
}

export interface IWriteService<T> {

    Post(body: any): Promise<any>;

    Put(id: number, body: any): Promise<any>;

    Delete(id: number): Promise<any>;
}

abstract class InternalRestService<T> implements IReadService<T>, IWriteService<T> {
    constructor(public readonly _repository: Repository<T>) {

    }

    GetAll(): Promise<T[]> {
        return this._repository.find();
    }

    Get(id: number): Promise<T> {
        return this._repository.findOneById(id);
    }

    Post(body: any): Promise<any> {
        return this._repository.save(body);
    }

    Put(id: number, body: any): Promise<any> {
        return this._repository.updateById(id, body);
    }

    Delete(id: number): Promise<any> {
        return this._repository.deleteById(id);
    }
}

export abstract class ReadService<T> extends InternalRestService<T>
    implements IReadService<T> {
    constructor(repository: Repository<T>) {
        super(repository);
    }
}

export abstract class WriteService<T> extends InternalRestService<T>
    implements IWriteService<T> {
    constructor(repository: Repository<T>) {
        super(repository);
    }
}

export abstract class RestService<T> extends InternalRestService<T>
    implements IReadService<T>, IWriteService<T> {
    constructor(repository: Repository<T>) {
        super(repository);
    }
}