import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { RegisterModule }     from './register/register.module';
import { List_EditModule }    from './list_edit/list_edit.module';

import { TalksComponent }     from './index';
import { routes }             from './talks.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        RegisterModule,
        List_EditModule,
    ],
    declarations: [TalksComponent],
    exports: [TalksComponent]
})

export class TalksModule { }