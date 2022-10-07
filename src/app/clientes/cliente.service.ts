import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.model";

//single source of truth
@Injectable({providedIn: 'root'})
export class ClienteService {

  private clientes: Cliente[] = [
    {
      nome: 'Ana',
      fone: '12345678',
      email: 'ana@email.com'
    }
  ]

  getClientes(): Cliente[]{
    return [...this.clientes]  
  }

  adicionarCliente (nome: string, fone: string, email: string): void{
    const cliente: Cliente = {nome,fone, email}
    this.clientes.push(cliente)
  }
}