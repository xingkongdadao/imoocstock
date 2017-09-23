import { Component, OnInit } from '@angular/core';
import {SocketService} from "../services/socket.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount: number = 0;

  constructor(public sokcetService: SocketService) { }

  ngOnInit() {
    this.sokcetService.createObservableSocket("ws://localhost:8085")
      .map(event =>JSON.parse(event))
      .subscribe(
        event => this.messageCount = event.messageCount
      );
  }




}
