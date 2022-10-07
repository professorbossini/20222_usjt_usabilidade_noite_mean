import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})

export class ClienteInserirComponent {
  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;

  constructor(private clienteService: ClienteService){
  }

  @Output() clienteAdicionado = new EventEmitter <Cliente>();

  onAdicionarCliente(form: NgForm) {
    if (form.invalid) return
    // 1. construir um objeto cliente
    const cliente: Cliente = {
      nome: form.value.nome,
      fone: form.value.fone,
      email: form.value.email
    }
    // 2. emitir um evento incluindo este objeto
    this.clienteAdicionado.emit(cliente)
  }

}
