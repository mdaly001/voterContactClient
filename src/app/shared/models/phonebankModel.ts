import { Script } from './scriptModel';
import { User } from './userModel';
import { Universe } from './universeModel';

export class Phonebank {
    constructor(
        public name: string,
        public details: string,
        public script: Script,
        public universe: Universe,
        public creationDate: Date,
        public createdBy: User
    ) { }
}
