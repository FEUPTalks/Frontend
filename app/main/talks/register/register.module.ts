import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }   from '@angular/http';

import { RegisterComponent } from './register.component';

import { MDL }       from '../../../shared/index';

@NgModule({
    imports: [ HttpModule ],
    declarations: [RegisterComponent, MDL],
    exports: [RegisterComponent]
})

export class RegisterModule { }