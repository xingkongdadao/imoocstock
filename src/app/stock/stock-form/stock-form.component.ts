import { Component, OnInit } from '@angular/core';
import {Stock} from "../../modules/stock";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  formModel: FormGroup;
  public stock: Stock;
  public categories = ["IT", "互联网", "金融"];

  constructor(
    private routInfo: ActivatedRoute,
    private stockService: StockService,
    private router: Router) { }

  ngOnInit() {
    let stockId = this.routInfo.snapshot.params['id'];
    this.stockService.getStock(stockId);

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        price: [this.stock.price, [Validators.required]],
        desc: [this.stock.desc],
        categories: fb.array([
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
        ])

      }
    );

  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
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
    // this.router.navigateByUrl('/stock');
  }

}
