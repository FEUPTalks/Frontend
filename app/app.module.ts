import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { RouterModule }    from '@angular/router';
import { FormsModule }     from '@angular/forms';
import { MainModule }      from './main/main.module';
import { DashboardModule } from './dashboard/db.module';

import { AppComponent }    from './app.component';
import { routes }          from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        MainModule,
        DashboardModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }