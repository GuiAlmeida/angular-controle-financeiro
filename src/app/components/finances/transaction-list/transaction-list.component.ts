import {
  LocalStorageService
} from './../../../services/local-storage.service';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  Transaction
} from 'src/app/models/finances/finances.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

export class TransactionListComponent implements OnChanges {

  public total = 0;

  @Input() public transactionList: Array < Transaction > ;

  public calcAmountValue(transactionList: Array < Transaction > ) {
    console.log('list', this.transactionList)
    for (let i = 0; i < transactionList.length; i++) {
      if (transactionList[i].type === 'Venda') {
        this.total = this.total += transactionList[i].price;
      } else {
        this.total = this.total -= transactionList[i].price;
      }
      return this.total;
    }
  }

  constructor(private LocalStorageService: LocalStorageService) {}

  deleteItem(i: number) {
    this.transactionList.splice(i, 1);
    console.log('this.transactionList.length', this.transactionList.length)
    if (this.transactionList.length > 0) {
      this.total = this.total -= this.transactionList[i].price;
    }
    this.LocalStorageService.deleteTransactionListFromLocalStorage(this.transactionList);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.calcAmountValue(this.transactionList);
  }
}
