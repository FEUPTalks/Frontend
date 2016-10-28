import { Component, AfterViewChecked } from '@angular/core';

/**
 *	This class represents the main website
 */

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'main-cmp',
    templateUrl: './main.component.html',
})

export class MainComponent implements AfterViewChecked {
    /* We need because Angular makes content dynamic, and material design needs to update injected content */
    static ngAfterViewChecked() {
        componentHandler.upgradeAllRegistered();
    }
}