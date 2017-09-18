import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'progress-bar',
    templateUrl: 'progressBar.html',
    styleUrls: ['progressBar.css']
})

export class ProgressBarComponent {
    @Input() value: number;
}
