"use strict";
var db_component_1 = require('./db.component');
var home_component_1 = require('./home/home.component');
exports.routes = [
    {
        path: 'dashboard',
        component: db_component_1.DashboardComponent,
        children: [
            { path: 'home', component: home_component_1.HomeComponent },
            { path: '', redirectTo: 'home' }
        ]
    }
];
//# sourceMappingURL=db.routes.js.map