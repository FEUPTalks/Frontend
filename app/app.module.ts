import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './components/home/home.component';
import { TestComponent }   from './components/test/test.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'test', component: TestComponent }
        ])
    ],
    declarations: [
        AppComponent,
        TestComponent,
        HomeComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }