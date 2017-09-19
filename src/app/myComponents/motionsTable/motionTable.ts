import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableRowItem } from '../../Types/table-row-item';
import { DataService } from '../../service/data.service';
import { ProgressBarComponent } from '../progressBar/progressBar.component';
import { OrderByDesc } from '../../myPipes/descPipe';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'motiontable',
    templateUrl: './motionTable.html',
    styleUrls: ['./motionTable.css']
})
// tslint:disable-next-line:component-class-suffix
export class MotionTable {
    @Input() tableName: string;
    @Output() selectedItem: EventEmitter<TableRowItem> = new EventEmitter<TableRowItem>();
    @Input()items: TableRowItem[];

    constructor() {

    }

    onMouseHover(item: TableRowItem) {
        this.selectedItem.emit(item);
    }
}
