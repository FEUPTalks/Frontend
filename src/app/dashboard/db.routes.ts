import { DashboardComponent } from './db.component';
import { HomeComponent }      from './home/home.component';
import {AuthGuard} from "../services/auth/guard.service";
import {PendingComponent} from "./pending/pending.component";
import {TalkGetComponent} from "./talks/get/index";
import {TalkEditComponent} from "./talks/edit/edit.component";
import {ArchivesComponent} from "./archives/archives.component";
import {WaitingComponent} from "./waiting/waiting.component";
import {AcceptedComponent} from "./accepted/accepted.component";
import {LiveComponent} from "./live/live.component";

/**
 * So, how do routes work?
 *
 * Routes are divided into categories, for example:
 * Everything inside /home will go into HomeComponent
 *
 * What about everything inside /home/me?
 * In that case, you would have to create a new routes file inside the "home" folder that contains:
 * { path: 'me', component: <any>MeComponent }
 * So basically, this main routing file would redirect /home to HomeComponent
 * and then (in the other file) /home/me to MeComponent
 *
 * Want an example?
 * Check app/app.routes.ts where is says "dashboard" redirects to DashboardComponent
 * Now check app/dashboard/db.routes.ts where is says "home" redirects to HomeComponent (/dashboard/home)
 *
 * What means canActivate?
 * CanActivate is the service which tells if the user can access a page (has permissions)
 * Check services/auth/guard.service.ts
 *
 * What means data: { role: 2 }?
 * Since there are two users, we lacked a way of telling the system which permissions a user must have to access
 * a page. So we created this data role, where we tell the MINIMUM role required to access the page
 *
 * Why some have components and other have redirectTo?
 * Redirect to is a "helper" to make a certain path do something that is already defined
 * Ex: path: 'hello', redirectTo: 'home'
 * Whenever they type /dashboard/hello they will go to home
 */
export const routes = [
    {
        path: 'dashboard',
        component: <any>DashboardComponent,
        children: [
            { path: 'home', component: <any>HomeComponent, canActivate: [AuthGuard], data: { role: 2 } },
            { path: 'pending', component: <any>PendingComponent, canActivate: [AuthGuard], data: { role: 1 } },
            { path: 'archives', component: <any>ArchivesComponent, canActivate: [AuthGuard], data: { role: 2 } },
            { path: 'waiting', component: <any>WaitingComponent, canActivate: [AuthGuard], data: { role: 1 } },
            { path: 'live', component: <any>LiveComponent, canActivate: [AuthGuard], data: { role: 1 } },
            { path: 'accepted', component: <any>AcceptedComponent, canActivate: [AuthGuard], data: { role: 2 } },
            { path: 'talks/:id', component: <any>TalkGetComponent, canActivate: [AuthGuard], data: { role: 2 } },
            { path: 'talks/edit/:id', component: <any>TalkEditComponent, canActivate: [AuthGuard], data: { role: 1 } },
            { path: '', redirectTo: 'home' }
        ]
    }
];