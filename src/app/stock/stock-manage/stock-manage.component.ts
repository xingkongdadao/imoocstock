import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Stock} from "../../modules/stock";
import {Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {StockdatabaseService} from "../../services/stockdatabase.service";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit, OnChanges, DoCheck {
  public stocks: Observable<Stock[]>;
  public nameFilter: FormControl = new FormControl();
  public keyWord: string;

  constructor(public router: Router, private stockService: StockdatabaseService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      // .debounceTime(500)
      .subscribe(value => this.keyWord = value);

  }

  ngOnChanges(){
    // this.stocks = this.stockService.getStocks();


  }

  ngDoCheck() {
    // this.stocks = this.stockService.getStocks();
    // this.nameFilter.valueChanges
    // .debounceTime(500)
    //   .subscribe(value => this.keyWord = value);
  }

  create() {
    this.router.navigateByUrl('/stock/0');

  }

  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id)

  }

  deleteStock(stock: Stock) {
    this.stockService.deleteStock(stock)
      .subscribe(

      );
    this.router.navigateByUrl('/stock')

  }



}



