import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menus: Array<Menu>;
  public currentMenuId: number;

  constructor( public router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'dashboard'),
      new Menu(2, '股票管理', 'stock'),
      new Menu(3, '谷歌地图', 'googleMap')

    ];
    this.currentMenuId = this.menus[0].id;

  }
  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }

}

export class Menu {
  constructor(
    public id: number,
    public name:string,
    public link: string
  ) {}
}
