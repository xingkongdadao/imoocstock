import { Injectable } from '@angular/core';
import {Stock} from "../modules/stock";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class StockService {

  constructor(public http: Http) {

  }

    getStocks(): Observable<Stock[]> {
      return this.http.get('/api/stocks').map(res => res.json() );
    }

    getStock(id:number): Observable<Stock> {
      return this.http.get('/api/stocks/' + id).map(res => res.json() );
    }
  }

