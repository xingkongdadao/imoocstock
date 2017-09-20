import { Injectable } from '@angular/core';
import {Stock} from "../modules/stock";

@Injectable()
export class StockService {

  constructor() { }


    public stocks: Stock[] = [
      new Stock(1, "第一支股票",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(2, "第二支股票",1.99, 4.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(3, "第三支股票",1.99, 2.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]),
      new Stock(4, "第四支股票",1.99, 1.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"])

    ]


    getStocks():Stock[] {

      return this.stocks;
    }

    getStock(id:number): Stock {
      return this.stocks.find(stock => stock.id == id);
    }
  }

