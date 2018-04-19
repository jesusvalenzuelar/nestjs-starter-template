import { Project } from '../../common/data';
import { TOKENS } from '../../constants';
import { TypeORMProvider } from '../../common/providers';

export const projectProvider = TypeORMProvider
    .create<Project>(TOKENS.ProjectRepositoryToken, Project);
