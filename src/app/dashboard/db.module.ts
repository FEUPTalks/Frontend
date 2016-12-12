import { NgModule }           from '@angular/core';
import {RouterModule, ActivatedRouteSnapshot}       from '@angular/router';
import { HomeModule }         from './home/home.module';
import { DashboardComponent } from './db.component';
import { routes }             from './db.routes';
import { UserService } from "../services/auth/user.service";
import {AuthGuard} from "../services/auth/guard.service";
import {PendingModule} from "./pending/pending.module";


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        PendingModule,
        
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [UserService, AuthGuard]
})

export class DashboardModule { }