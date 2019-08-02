import {
  Injectable
} from '@angular/core';
import {
  Transaction
} from './../models/finances/finances.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getTransactionListFromLocalStorage(): Array < Transaction > {
    return JSON.parse(localStorage.getItem('transactionList') || '[]');
  }

  public deleteTransactionListFromLocalStorage(transaction: any) {
    localStorage.setItem('transactionList', JSON.stringify(transaction));
  }

  public setTransactionInLocalStorage(transaction: any) {
    const transactionListFromLocalStorage = this.getTransactionListFromLocalStorage();
    transactionListFromLocalStorage.unshift(transaction);
    localStorage.setItem('transactionList', JSON.stringify(transactionListFromLocalStorage));
  }

  constructor() {}
}
