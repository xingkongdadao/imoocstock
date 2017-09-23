import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockManageComponent} from "./stock/stock-manage/stock-manage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StockFormComponent} from "./stock/stock-form/stock-form.component";
import {GooglemapComponent} from "./googlemap/googlemap.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'stock', component: StockManageComponent},
  {path:'dashboard', component: DashboardComponent},
  {path: 'stock/:id', component: StockFormComponent},
  {path: 'googleMap', component: GooglemapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
