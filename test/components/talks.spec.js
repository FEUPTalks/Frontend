"use strict";
var talk_service_1 = require("../../app/services/talk.service");
describe('Integration testing for talks', function () {
    var service = new talk_service_1.TalkService();
    it('should expect content type is json', function () {
        expect(2 + 2).toEqual(4);
    });
});
//# sourceMappingURL=talks.spec.js.map