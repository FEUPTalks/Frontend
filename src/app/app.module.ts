import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MainModule} from "./main/main.module";
import {routes} from "./app.routes";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./dashboard/db.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        MainModule,
        DashboardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
