import { Phonebank } from './../../shared/models/phonebankModel';
import { Script } from './../../shared/models/scriptModel';
import { SCRIPTLIST } from './mock-scriptList';
import { Voter } from './../../shared/models/voterModel';
import { VOTERLIST } from './mock-voterList';
import {userMichael} from './mock-scriptList';

export const PHONEBANKLIST: Phonebank[] = [
    new Phonebank('VBM Persuasion', 'Phonebank for VBM Persuasion', [SCRIPTLIST[0], SCRIPTLIST[2]],
        VOTERLIST, new Date('06/08/2017'), userMichael),
    new Phonebank('Poll Persuasion', 'Phonebank for Poll Persuasion', [SCRIPTLIST[0], SCRIPTLIST[2]],
        VOTERLIST, new Date('06/08/2017'), userMichael),
    new Phonebank('GOTV', 'Phonebank for GOTV', [SCRIPTLIST[1]],
        VOTERLIST, new Date('06/08/2017'), userMichael)
];
