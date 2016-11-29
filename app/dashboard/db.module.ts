import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { HomeModule }         from './home/home.module';
import { List_EditModule }    from './list_edit/list_edit.module';
import { SidebarComponent }   from '../shared/index';
import { DashboardComponent } from './db.component';
import { routes }             from './db.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        List_EditModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }