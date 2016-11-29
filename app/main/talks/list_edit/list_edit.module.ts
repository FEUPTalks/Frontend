import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }   from '@angular/http';

import { List_EditComponent } from './list_edit.component';

@NgModule({
    imports: [ HttpModule ],
    declarations: [List_EditComponent],
    exports: [List_EditComponent]
})

export class List_EditModule { }