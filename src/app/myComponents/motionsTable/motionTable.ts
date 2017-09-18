import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableRowItem } from '../../Types/table-row-item';
import { DataService } from '../../service/data.service';
import { ProgressBarComponent } from '../progressBar/progressBar.component';
import { OrderByDesc } from '../../myPipes/descPipe';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'motiontable',
    templateUrl: './motionTable.html',
    styleUrls: ['./motionTable.css'],
    providers: [DataService]
})
// tslint:disable-next-line:component-class-suffix
export class MotionTable implements OnInit {
    @Input() fromJSON: boolean;
    @Input() tableName: string;
    @Output() selectedItem: EventEmitter<TableRowItem> = new EventEmitter<TableRowItem>();
    items: TableRowItem[];

    constructor(private dataService: DataService) {

    }

    Update(fromJSON: boolean): void {
        // tslint:disable-next-line:curly
        if (!fromJSON)
            this.dataService.getTableRowItemsObservable().subscribe(data => this.items = data);
        // tslint:disable-next-line:curly
        else
            this.dataService.getTableRowItemsJSON().subscribe(data => this.items = data);
    }


    ngOnInit() {
        this.Update(this.fromJSON);
    }

    onMouseHover(item: TableRowItem) {
        this.selectedItem.emit(item);
    }
}
