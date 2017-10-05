import { House } from './houseModel';

export class User {
    constructor(
        public userId: string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public homes: House[],
        public phone: string,
        public voterId?: string
    ) { }

    get name() {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }
}
