import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})

export class ClienteInserirComponent {
  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;

  onAdicionarCLiente() {
    console.log('inserindo cliente...');
  }

}
