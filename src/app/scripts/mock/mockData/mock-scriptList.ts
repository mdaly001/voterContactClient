import { User } from './../../../shared/models/userModel';
import { Script, Flag, Question } from './../../models/scriptModel';
import { House } from './../../../shared/models/houseModel';

const userMichael = new User('1', 'Michael', 'Reynoso', 'Gomez',
    [new House('1234 some street', '', 'some city', 'San Bernardino', 'CA', '92345')],
    '0000000000', 'asdf32343');

const userMonica = new User('2', 'Monica', 'Reynoso', 'Gomez',
    [new House('1234 some street', '', 'some city', 'San Bernardino', 'CA', '92345')],
    '0000000000', 'fasdf23433');

const candidateQuestions: Question[] = [
    new Question('Are you aware there will be an election this upcoming November' ),
    new Question('Will you be voting this upcoming election?' ),
    new Question('Do you support Eloise for Assembly?' )
];

const nonProfitQuestions: Question[] = [
    new Question('Are you aware there will be an election this upcoming November' ),
    new Question('Will you be voting this upcoming election?' )
];

const issueQuestions: Question[] = [
    new Question('Do you support criminal justice reform?' ),
    new Question('Do you support immigration reform?' ),
    new Question('Do you support environmental justice?' ),
    new Question('Will you be voting this upcoming election?' )
];

export const SCRIPTLIST: Script[] = [
    new Script('Candidate General 2017', 'Candidate Version', candidateQuestions, new Date('06/08/2017'), userMichael),
    new Script('Non Profit Version General 2017', 'Non Profit Version', nonProfitQuestions, new Date('03/23/2017'), userMonica),
    new Script('Issue Version General 2017', 'Issue Version', issueQuestions, new Date('04/12/2017'), userMichael)
];



