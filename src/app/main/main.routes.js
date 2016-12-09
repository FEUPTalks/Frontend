"use strict";
var main_component_1 = require('./main.component');
var home_component_1 = require('./home/home.component');
var talks_component_1 = require('./talks/talks.component');
var login_component_1 = require('./login/login.component');
var calendar_component_1 = require("./calendar/calendar.component");
var about_component_1 = require("./about/about.component");
exports.routes = [
    {
        path: '',
        component: main_component_1.MainComponent,
        children: [
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'talks', component: talks_component_1.TalksComponent },
            { path: 'calendar', component: calendar_component_1.CalendarComponent },
            { path: 'about', component: about_component_1.AboutComponent },
            { path: '', redirectTo: 'home' },
        ],
    },
    { path: 'login', component: login_component_1.LoginComponent }
];
//# sourceMappingURL=main.routes.js.map