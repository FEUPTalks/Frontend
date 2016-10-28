import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from '../shared/index';
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        RouterModule
        // RouterModule.forChildren(routes);
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }