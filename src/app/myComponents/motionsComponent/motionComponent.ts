import { Component, Input } from '@angular/core';
import { MotionTable } from '../motionsTable/motionTable';
import { TableRowItem } from '../../Types/table-row-item';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'motion-component',
    templateUrl: './motionComponent.html',
    styleUrls: ['./motionComponent.css']
})
export class MotionComponent {
    selected: TableRowItem;

    onSelectedItem(item: TableRowItem): void {
        this.selected = item;
    }
}
