import { NgModule }           from '@angular/core';
import {RouterModule, ActivatedRouteSnapshot}       from '@angular/router';
import { HomeModule }         from './home/home.module';
import { DashboardComponent } from './db.component';
import { routes }             from './db.routes';
import { UserService } from "../services/auth/user.service";
import {AuthGuard} from "../services/auth/guard.service";
import {PendingModule} from "./pending/pending.module";
import {TalkGetModule} from "./talks/get/index";
import {TalkEditModule} from "./talks/edit/edit.module";
import {ArchivesModule} from "./archives/archives.module";
import {WaitingModule} from "./waiting/waiting.module";

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        PendingModule,
        TalkGetModule,
        TalkEditModule,
        ArchivesModule,
        WaitingModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [UserService, AuthGuard]
})

export class DashboardModule { }