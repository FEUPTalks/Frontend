import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }   from '@angular/http';

import { List_EditComponent } from './list_edit.component';

import { MDL }       from '../../../shared/index';

@NgModule({
    imports: [ HttpModule ],
    declarations: [List_EditComponent, MDL],
    exports: [List_EditComponent]
})

export class List_EditModule { }