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
import {AcceptedModule} from "./accepted/accepted.module";
import {SharedModule} from "../shared/shared/shared.module";
import {LiveModule} from "./live/live.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        HomeModule,
        PendingModule,
        TalkGetModule,
        TalkEditModule,
        ArchivesModule,
        WaitingModule,
        AcceptedModule,
        LiveModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: [UserService, AuthGuard]
})

export class DashboardModule { }