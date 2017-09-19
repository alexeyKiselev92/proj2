import { MotionComponent } from '../myComponents/motionsComponent/motionComponent';
import { MotionTable } from '../myComponents/motionsTable/motionTable';
import { Input, Output, EventEmitter } from '@angular/core';
import { TableRowItem } from '../Types/table-row-item';
import { DataService } from '../service/data.service';
import { Http } from '@angular/http';

export class MotionTableBuilder {
    @Input() fromJSON: boolean;
    @Input() tableName: string;
    @Output() selectedItem: EventEmitter<TableRowItem> = new EventEmitter<TableRowItem>();
    items: TableRowItem[];
    dataService: DataService;

    constructor () {

    }

    public addDataService() {
        this.dataService = new DataService(new Http())
    }

    public build() : MotionTable{
        return new MotionTable()
    }
}