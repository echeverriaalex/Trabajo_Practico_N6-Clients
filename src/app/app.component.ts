import { Component } from '@angular/core';
import { Client } from './Models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabajo_Practico_N6_Angular';

  clientList = new Array<Client>();
  client = new Client();

  showListCliente(clientList: Array<Client>){
    this.clientList = clientList;
  }
  
}
