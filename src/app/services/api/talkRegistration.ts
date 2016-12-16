export class TalkRegistration {
    constructor(
        public name: string,
        public email: string,
        public talkID: number,
        public isAttendingSnack: boolean,
        public wantsToReceiveNotifications: boolean
    ){}
}
