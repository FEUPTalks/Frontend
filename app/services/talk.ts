export class Talk {
    constructor(
        public talkID: number,
        public title: string,
        public summary: string,
        public proposedInitialDate: string,
        public proposedEndDate: string,
        public definitiveDate: string,
        public duration: number,
        public proponentName: string,
        public proponentEmail: string,
        public proponentAffiliation: string,
        public speakerName: string,
        public speakerBrief: string,
        public speakerAffiliation: string,
        public speakerPicture: number,
        public hostName: string,
        public hostEmail: string,
        public snack: string,
        public room: string,
        public state: string
    ){}
}