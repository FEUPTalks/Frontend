import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb';
import { BreadcrumbService } from './breadcrumbService';

export * from './breadcrumb'
export * from './breadcrumbService'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BreadcrumbComponent
    ],
    exports: [
        BreadcrumbComponent
    ]
})

export class Ng2BreadcrumbModule { }
