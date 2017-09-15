import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Generator } from './mock';

@Injectable()
export class DataService {

    public getTableRowItemsObservable() {
        return Observable.create(observer => {
            observer.next(Generator.getInstance().getData());
            observer.complete();
        });
    }
}
