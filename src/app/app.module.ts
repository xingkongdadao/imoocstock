import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StarsComponent } from './stars/stars.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./services/stock.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StockFilterPipe } from './pipe/stock-filter.pipe';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {HttpModule} from "@angular/http";
import {SocketService} from "./services/socket.service";
import {StockdatabaseService} from "./services/stockdatabase.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    SidebarComponent,
    StarsComponent,
    StockManageComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [StockService,SocketService, StockdatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
