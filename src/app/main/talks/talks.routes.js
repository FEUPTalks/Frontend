"use strict";
var index_1 = require('./index');
var get_component_1 = require("./get/get.component");
var main_component_1 = require("../main.component");
var home_component_1 = require("../home/home.component");
exports.routes = [
    {
        path: 'talks',
        component: main_component_1.MainComponent,
        children: [
            { path: 'register', component: index_1.RegisterComponent },
            { path: ':id', component: get_component_1.TalkGetComponent },
            { path: '', component: home_component_1.HomeComponent }
        ]
    }
];
//# sourceMappingURL=talks.routes.js.map