"use strict";
var Talk = (function () {
    function Talk(talkID, title, summary, date, dateflex, duration, proponentName, proponentEmail, speakerName, speakerBrief, speakerAffiliation, speakerPicture, hostName, hostEmail, snack, room, other, state) {
        this.talkID = talkID;
        this.title = title;
        this.summary = summary;
        this.date = date;
        this.dateflex = dateflex;
        this.duration = duration;
        this.proponentName = proponentName;
        this.proponentEmail = proponentEmail;
        this.speakerName = speakerName;
        this.speakerBrief = speakerBrief;
        this.speakerAffiliation = speakerAffiliation;
        this.speakerPicture = speakerPicture;
        this.hostName = hostName;
        this.hostEmail = hostEmail;
        this.snack = snack;
        this.room = room;
        this.other = other;
        this.state = state;
    }
    return Talk;
}());
exports.Talk = Talk;
//# sourceMappingURL=talk.js.map