import { TableRowItem } from '../Types/table-row-item';

export class Generator {
    private data: TableRowItem[] = [];

    // tslint:disable-next-line:member-ordering
    private static _instance: Generator;

    constructor() {
    }

    public static getInstance() {
        if (!Generator._instance) {
            Generator._instance = new Generator();
        }
        return Generator._instance;
    }

    public getData(): TableRowItem[] {
        this.data = [];
        // tslint:disable-next-line:prefer-const
        let capacity = Math.random() * (7 - 1) + 1;
        for (let i = 1; i <= capacity; i++) {
            this.data.push(this.createTableRowInstance(Math.floor(Math.random() * (100 - 0) + 0), 'Item' + i.toString()));
        }
        return this.data;
    }


    createTableRowInstance(val: number, name: string): TableRowItem {
        let item: TableRowItem = new TableRowItem();
        item.value = val;
        item.name = name;
        return item;
    }
}

