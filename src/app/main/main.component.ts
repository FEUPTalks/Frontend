import {Component, ViewChild} from '@angular/core';
import {BreadcrumbService} from '../shared/ng2-breadcrumb';

/**
 *	This class represents the main website
 */

@Component({
    selector: 'main-cmp',
    templateUrl: './main.component.html',
})

export class MainComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        breadcrumbService.addFriendlyNameForRoute('/talks', 'home');
    }
}
