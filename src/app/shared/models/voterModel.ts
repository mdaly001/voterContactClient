export class Voter {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public dateOfBirth: Date,
        public voterId: string,
        public party: string,
        public address1: string,
        public address2: string,
        public city: string,
        public county: string,
        public state: string,
        public postalCode: string,
        public phone: string,
        public originCountry: string,
        public registrations: Registration[],
    ) { }

    get name(): String {
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }

    get age(): Number {
        const cur = +new Date();
        const diff = cur - +this.dateOfBirth;
        return Math.floor(diff / 31536000000);
    }

    get address(): String {
        return this.address1 + ' ' + this.address2;
    }

    get cityStateZip(): String {
        return this.city + ', ' + this.state + ' ' + this.postalCode;
    }

    get origRegistration(): Registration {
        return this.registrations[this.registrations.length - 1];
    }

    get origRegDate(): Date {
        return this.origRegistration.registrationDate;
    }

    get recentRegistration(): Registration {
        return this.registrations[0];
    }

    get recentRegDate(): Date {
        return this.recentRegistration.registrationDate;
    }

    get vbm(): boolean {
        return this.recentRegistration.vbm;
    }
}

export class Registration {
    constructor(
        public registrationDate: Date,
        public registrationCounty: string,
        public registrationMethod: string,
        public vbm: boolean
    ) { }
}
