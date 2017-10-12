import { Script } from './scriptModel';
import { Voter } from './voterModel';
import { User } from './userModel';

export class Phonebank {
    constructor(
        public name: string,
        public details: string,
        public scripts: Script[],
        public voters: Voter[],
        public creationDate: Date,
        public createdBy: User
    ) { }
}
