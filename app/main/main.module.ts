import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { TestModule } from './test/test.module';
import { ProjectsModule } from './projects/projects.module';

import { routes } from './main.routes';

import { MainComponent } from './index';
import { TopNavCleanComponent } from '../shared/index';

@NgModule({
    imports: [
        HomeModule,
        TestModule,
        ProjectsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [MainComponent, TopNavCleanComponent],
    exports: [MainComponent, TopNavCleanComponent]
})

export class MainModule { }