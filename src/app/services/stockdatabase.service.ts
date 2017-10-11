import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Stock} from "../modules/stock";
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class StockdatabaseService {
  public add_stock: add_Stock = new add_Stock(0, "", 0, 0, "", "");

  constructor(public http: Http) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get('/api2/stocks/').map(res => res.json() );
  }

  getStock(id:number): Observable<Stock> {
    return this.http.get('/api2/stocks/' + id).map(res => res.json() );
  }

  postStock(stock: Stock): Observable<Stock> {

    this.add_stock.categories = stock.categories.toString();
    this.add_stock.name = stock.name;
    this.add_stock.desc = stock.desc;
    this.add_stock.rating = stock.rating;
    this.add_stock.price = stock.price;
    console.log(this.add_stock.categories);

    let body = JSON.stringify(this.add_stock);
    console.log(body.toString());

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api2/stocks/', body, options)
      .map(res => res.json() );
  }

  deleteStock(stock: Stock): Observable<Stock> {
    return this.http.delete('/api2/stocks/' + stock.id)
      .map(res => res.json() );
  }

}





export class add_Stock {
  constructor(
    public id: number,
    public  name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: string
  ){ }
}
