import { Component, OnInit } from '@angular/core';
import {Stock} from "../../modules/stock";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, "第一支股票.",1.99, 3.5, "这是第一只股票，是我在学习慕课网", ["IT", "互联网"]);

  }

}
