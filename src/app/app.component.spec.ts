/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {HomeComponent} from './main/home/home.component';
import {List_EditModule} from "./main/talks/list_edit/list_edit.module";
import {SharedModule} from "./shared/shared/shared.module";

describe('HomeComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                List_EditModule
            ],
            declarations: [
                HomeComponent
            ],
        });
    });

    it('should create the home', () => {
        let fixture = TestBed.createComponent(HomeComponent);
        let home = fixture.componentInstance;
        expect(home).toBeTruthy();
    });

    it('should render the datatable', async(() => {
        let fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('datatable')).toBeTruthy();
    }));
});
