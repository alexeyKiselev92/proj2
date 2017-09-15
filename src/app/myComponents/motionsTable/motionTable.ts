import { Component, OnInit } from '@angular/core';
import { TableRowItem } from '../../Types/table-row-item';
import { DataService } from '../../service/data.service';
import { ProgressBarComponent } from '../progressBar/progressBar.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'motiontable',
    templateUrl: './motionTable.html',
    styleUrls: ['./motionTable.css'],
    providers: [DataService]
})
// tslint:disable-next-line:component-class-suffix
export class MotionTable implements OnInit {
    items: TableRowItem[];

    constructor(private dataService: DataService) {

    }

    Update(): void {
        this.dataService.getTableRowItemsObservable().subscribe(data => this.items = data);
    }


    ngOnInit() {
        this.Update();
    }
}
