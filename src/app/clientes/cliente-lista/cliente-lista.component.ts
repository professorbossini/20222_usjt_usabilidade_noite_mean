import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent{
  @Input() clientes: Cliente[] = []  
}















  // clientes = [
  //   {
  //     nome: 'José',
  //     fone: '12345678',
  //     email: 'jose@email.com'
  //   },
  //   {
  //     nome: 'Maria',
  //     fone: '45454545',
  //     email: 'maria@email.com'
  //   },
  //   {
  //     nome: 'Pedro',
  //     fone: '77887744',
  //     email: 'pedro@email.com'
  //   }
  // ]
