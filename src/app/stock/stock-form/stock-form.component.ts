import { Component, OnInit } from '@angular/core';
import {Stock} from "../../modules/stock";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StockdatabaseService} from "../../services/stockdatabase.service";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  formModel: FormGroup;
  public stock: Stock = new Stock(0, "", 0, 0, "", []);
  public categories = ["IT", "互联网", "金融"];
  public add_stock :Stock;

  constructor(
    private routInfo: ActivatedRoute,
    private stockService: StockdatabaseService,
    private router: Router) { }

  ngOnInit() {
    let stockId = this.routInfo.snapshot.params['id'];

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        desc: [''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false)
        ])

      }
    );

    this.stockService.getStock(stockId).subscribe(
        data => {
          this.stock = data;
          this.formModel.reset({
            name: data.name,
            price: data.price,
            desc: data.desc,
            categories: [
              data.categories.indexOf(this.categories[0]) != -1,
              data.categories.indexOf(this.categories[1]) != -1,
              data.categories.indexOf(this.categories[2]) != -1
            ]
          })
        }
    );


  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  updatestock() {
    let chineseCategories = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }

    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
    //提交服务器
    this.add_stock = this.formModel.value;
    if(!this.formModel.value) {return;}

    this.stockService.postStock(this.add_stock)
      .subscribe(
      );

    this.router.navigateByUrl('/stock');
  }


  addstock() {
    let chineseCategories = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }

    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
    //提交服务器
    this.add_stock = this.formModel.value;
    if(!this.formModel.value) {return;}

    this.stockService.postStock(this.add_stock)
      .subscribe(

      );

    this.router.navigateByUrl('/stock');
  }
}
