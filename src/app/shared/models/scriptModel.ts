import { User } from './../../shared/models/userModel';

export class Script {
    constructor(
        public scriptName: string,
        public scriptDetails: string,
        public scriptQuestions: Question[],
        public creationDate: Date,
        public createdBy: User
    ) { }
}

export class Question {
    constructor(
        public question: string = ' ',
        public responseFlags: Flag[]
    ) { }

    get responses() {
        let responseString = '';
        for (const response of this.responseFlags) {
            responseString += response.nameAbbrev + ' ';
        }
        return responseString;
    }
}

export class Flag {
    constructor(
        public name: string = ' ',
        public nameAbbrev: string = ' '
    ) { }
}
