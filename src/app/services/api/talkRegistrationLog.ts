export class TalkRegistrationLog {
    constructor(
        public name: string,
        public email: string,
        public talkID: number,
        public isAttendingSnack: boolean,
        public wantsToReceiveNotifications: boolean,
        public transactionType: number,
        public transactionDate: string
    ){}
}
