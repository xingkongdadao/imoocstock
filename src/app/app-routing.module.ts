import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockManageComponent} from "./stock/stock-manage/stock-manage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'stock', component: StockManageComponent},
  {path:'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
