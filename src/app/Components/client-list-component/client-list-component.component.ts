import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/Models/client';

@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent implements OnInit{
  @Input()
  clientList: Array<Client> = []

  @Output()
  deleteClientEvent = new EventEmitter<Client>();

  
  constructor(){}

  ngOnInit(): void {
    
  }

  deleteClient(id: number){
    // recorro el array buscando el elemento a borrar
    for(let i=0; i < this.clientList.length; i++){
      if(this.clientList[i].clientId == id){
        // cuando tengo la posicion del elemento se la paso a splice
        // 1 es la cantidad de elementos que quiero borrar
        this.clientList.splice(i, 1);
      }
    }

    // El filter en este ejercicio no me sirve porque me crea un array nuevo
    // con el mismo nombre pero es otra instancia del arreglo no es la misma
    // referencia del array original
    // this.clientList = this.clientList.filter(client => client.clientId !== id);
    //this.deleteClientEvent.emit()
  }

  editClient(id: number){

  }
}
