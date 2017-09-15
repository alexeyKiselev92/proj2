import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'progress-bar',
    templateUrl: './myComponents/progressBar/progressBar.html',
    styleUrls: ['./myComponents/progressBar/progressBar.css']
})

export class ProgressBarComponent {
    @Input() value: number;
}
