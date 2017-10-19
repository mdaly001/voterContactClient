import { Voter } from './voterModel';
import { User } from './userModel';

export class Universe {
    constructor(
        public name: string,
        public details: string,
        public voters: Voter[],
        public creationDate: Date,
        public createdBy: User
    ) { }
}
