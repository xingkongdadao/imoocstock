import { Component, OnInit } from '@angular/core';
import {Stock} from "../../modules/stock";
import {Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
import {FormControl} from "@angular/forms";
// import "rxjs/add/operator/debounceTime";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  public stocks: Array<Stock>;
  public nameFilter: FormControl = new FormControl();
  public keyWord: string;

  constructor(public router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyWord = value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');

  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id)

  }

  deleteStock(stock: Stock) {
    this.router.navigateByUrl('/stock')

  }



}



