import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/Models/client';

@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-component.component.html',
  styleUrls: ['./client-add-component.component.css']
})
export class ClientAddComponentComponent implements OnInit{
  @Input()
  clientList: Array<Client> = [];
  // !: inidico que le aseguro que en algun momento va a asignarse valor
  clientId !: number; // clientId: number = 0; con 
  firstName: string = "";
  lastName: string = "";
  dni !: number; // dni: number = 0;
  email: string = "";
  address: string = "";

  ngOnInit(): void {
    
  }

  addClient(){
    let client = new Client();
    client.clientId = this.clientId
    client.firstName = this.firstName
    client.lastName = this.lastName
    client.dni = this.dni
    client.email = this.email
    client.address = this.address

    this.clientList.push(client);
  }
}