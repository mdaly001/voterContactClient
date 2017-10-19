import { VOTERLIST } from './mock-voterList';
import { Universe } from './../../shared/models/universeModel';
import { userMichael } from './mock-scriptList';

export const UNIVERSELIST: Universe[] = [
    new Universe('VBM Universe', 'Universe for vbms', VOTERLIST, new Date('06/08/2017'), userMichael),
    new Universe('Poll Universe', 'Universe for poll voters', VOTERLIST, new Date('06/08/2017'), userMichael),
    new Universe('GOTV Universe', 'Universe for GOTV', VOTERLIST, new Date('06/08/2017'), userMichael)
];
