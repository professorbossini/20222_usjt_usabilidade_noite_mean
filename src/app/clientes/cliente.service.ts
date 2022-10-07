import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.model";

//single source of truth
@Injectable({providedIn: 'root'})
export class ClienteService {

  private clientes: Cliente[] = []

  getClientes(): Cliente[]{
    return [...this.clientes]  
  }

  adicionarCliente (nome: string, fone: string, email: string): void{
    const cliente: Cliente = {nome,fone, email}
    this.clientes.push(cliente)
  }
}