import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import {MaterializeDirective} from "../materialize/materialize.directive";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ MaterializeDirective ],
    exports:      [ MaterializeDirective, CommonModule ]
})
export class SharedModule { }