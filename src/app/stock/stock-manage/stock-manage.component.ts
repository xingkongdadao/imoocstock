import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "第一支股票",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(2, "第二支股票",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(3, "第三支股票",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(4, "第四支股票",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"])

  ]
  }



}

export class Stock {
  constructor(
    public id: number,
    public  name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){ }
}

