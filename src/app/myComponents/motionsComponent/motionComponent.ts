import { Component, Input, OnInit } from '@angular/core';
import { MotionTable } from '../motionsTable/motionTable';
import { TableRowItem } from '../../Types/table-row-item';
import { DataService } from '../../service/data.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'motion-component',
    templateUrl: './motionComponent.html',
    styleUrls: ['./motionComponent.css'],
    providers: [DataService]
})
export class MotionComponent {
    selected: TableRowItem;
    items: TableRowItem[];
    itemsJSON: TableRowItem[];

    constructor(private dataService: DataService) {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.Update();
    }

    Update(): void {
        this.dataService.getTableRowItemsObservable().subscribe(data => this.items = this.orderByDesc(data).slice(0, 3));
        this.dataService.getTableRowItemsJSON().subscribe(data => this.itemsJSON = this.orderByDesc(data).slice(0, 3));
    }

    orderByDesc(data: TableRowItem[]): TableRowItem[] {
        return data.sort((a: TableRowItem, b: TableRowItem) => {
            if (a.value > b.value) {
                return -1;
            }
            // tslint:disable-next-line:one-line
            else if (a.value < b.value) {
                return 1;
            }
            // tslint:disable-next-line:one-line
            else {
                return 0;
            }
        });
    }

    onSelectedItem(item: TableRowItem): void {
        this.selected = item;
    }
}
