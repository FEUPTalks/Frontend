export class Talk {
    constructor(
        public talkID: number,
        public title: string,
        public summary: string,
        public date: string,
        public dateflex: number,
        public duration: number,
        public proponentName: string,
        public proponentEmail: string,
        public speakerName: string,
        public speakerBrief: string,
        public speakerAffiliation: string,
        public speakerPicture: number,
        public hostName: string,
        public hostEmail: string,
        public snack: number,
        public room: string,
        public other: string,
        public state: string
    ){}
}