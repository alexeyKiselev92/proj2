import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TableRowItem } from '../Types/table-row-item';
import { Generator } from './mock';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    constructor(private http: Http) {

    }

    public getTableRowItemsObservable() {
        return Observable.create(observer => {
            observer.next(Generator.getInstance().getData());
            observer.complete();
        });
    }

    public getTableRowItemsJSON() {
        // tslint:disable-next-line:prefer-const
        return this.http.get('assets/mock.json').map((res: Response) => res.json());
    }
}
