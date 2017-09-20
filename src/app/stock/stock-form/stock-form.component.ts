import { Component, OnInit } from '@angular/core';
import {Stock} from "../../modules/stock";
import {ActivatedRoute} from "@angular/router";
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  public stock: Stock;

  constructor(private routInfo: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    let stockId = this.routInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);

  }

}
