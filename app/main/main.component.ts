import {Component, ViewChild} from '@angular/core';
import {BreadcrumbService} from '../../node_modules/ng2-breadcrumb/ng2-breadcrumb';

/**
 *	This class represents the main website
 */

@Component({
    moduleId: module.id,
    selector: 'main-cmp',
    templateUrl: './main.component.html',
})

export class MainComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        breadcrumbService.addFriendlyNameForRoute('/talks', 'home');
    }
}