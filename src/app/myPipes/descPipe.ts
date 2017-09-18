import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TableRowItem } from '../Types/table-row-item';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'sortByDesc'
})
@Injectable()
// tslint:disable-next-line:one-line
export class OrderByDesc implements PipeTransform{
    transform(array: Array<TableRowItem>): Array<TableRowItem> {
        array.sort((a: TableRowItem, b: TableRowItem) => {
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
        return array;
    }
}
