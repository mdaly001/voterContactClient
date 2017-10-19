import { Phonebank } from './../../shared/models/phonebankModel';
import { Script } from './../../shared/models/scriptModel';
import { SCRIPTLIST } from './mock-scriptList';
import { Voter } from './../../shared/models/voterModel';
import {userMichael} from './mock-scriptList';
import {UNIVERSELIST} from './mock-universeList';

export const PHONEBANKLIST: Phonebank[] = [
    new Phonebank('VBM Persuasion', 'Phonebank for VBM Persuasion', SCRIPTLIST[0],
        UNIVERSELIST[0], new Date('06/08/2017'), userMichael),
    new Phonebank('Poll Persuasion', 'Phonebank for Poll Persuasion', SCRIPTLIST[1],
        UNIVERSELIST[1], new Date('06/08/2017'), userMichael),
    new Phonebank('GOTV', 'Phonebank for GOTV', SCRIPTLIST[2],
        UNIVERSELIST[2], new Date('06/08/2017'), userMichael)
];
