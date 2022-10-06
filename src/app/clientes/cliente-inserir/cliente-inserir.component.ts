import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})

export class ClienteInserirComponent {
  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;

  @Output() clienteAdicionado = new EventEmitter();

  onAdicionarCLiente() {
    //1. construir um objeto cliente
    const cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email
    }
    //2. emitir um evento incluindo este objeto
    this.clienteAdicionado.emit(cliente)
  }

}
