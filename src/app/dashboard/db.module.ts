import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { HomeModule }         from './home/home.module';
import { DashboardComponent } from './db.component';
import { routes }             from './db.routes';
import { UserService } from "../services/auth/user.service";
import {AuthGuard} from "../services/auth/guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [UserService, AuthGuard]
})

export class DashboardModule { }