import { Voter, Registration } from './../../../shared/models/voterModel';

export const VOTERLIST: Voter[] = [
    new Voter('Michael', 'Gomez', 'Reynoso', new Date('1980/12/23'), 'FD342df',
        'Democrat', '1234 Some Street', 'Apt 123', 'Some City', 'San Bernardino', 'CA',
        '92345', '9999999999', 'USA', [
            new Registration(new Date('2015/02/21'), 'Riverside', 'Online', true),
            new Registration(new Date('2014/06/23'), 'Riverside', 'DMV', false),
            new Registration(new Date('2001/11/12'), 'San Bernardino', 'In Person', false)
        ]),
    new Voter('Monica', 'Gomez', 'Reynoso', new Date('1980/11/23'), 'FD3asdfs',
        'Democrat', '1234 Some Street', 'Apt 123', 'Some City', 'San Bernardino', 'CA',
        '92345', '9999999999', 'Mexico', [
            new Registration(new Date('2012/01/02'), 'Riverside', 'Online', true),
            new Registration(new Date('2004/02/12'), 'San Bernardino', 'in person', true)
        ]),
    new Voter('Robert', 'Gomez', 'Reynoso', new Date('1990/12/23'), 'FD3asdfdf',
        'Democrat', '1234 Some Street', 'Apt 123', 'Some City', 'San Bernardino', 'CA',
        '92345', '9999999999', 'USA', [
            new Registration(new Date('2008/12/23'), 'San Bernardino', 'In Person', true)
        ]),
    new Voter('Jeff', 'Lynn', 'Gonzales', new Date('1990/03/13'), '23dasdfdf',
        'Democrat', '1234 Some Other Street', 'Apt 123', 'Some City', 'San Bernardino', 'CA',
        '92345', '9999999999', 'USA', [
            new Registration(new Date('2008/03/13'), 'San Bernardino', 'In Person', true)
        ])
];

