import { Component, OnInit } from '@angular/core';
import {Stock} from "../../modules/stock";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  public stocks: Array<Stock>;

  constructor(public router: Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "第一支股票",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(2, "第二支股票",1.99, 4.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(3, "第三支股票",1.99, 2.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(4, "第四支股票",1.99, 1.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"])

  ]
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



