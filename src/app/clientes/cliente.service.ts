import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Cliente } from "./cliente.model";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

//single source of truth SSOT
@Injectable({ providedIn: 'root' })
export class ClienteService {
  private listaClientesAtualizada = new Subject<Cliente[]>();

  private clientes: Cliente[] = [
    {
      id: null,
      nome: 'Ana',
      fone: '12345678',
      email: 'ana@email.com'
    }
  ]

  constructor(private httpClient: HttpClient, private router: Router) { }

  getClientes(): void {
    const url = 'http://localhost:3000/api/clientes'
    this.httpClient
      .get<{ mensagem: string, clientes: any }>(url)
      .pipe(map((dados) => {
        return dados.clientes.map(cliente => {
          return {
            id: cliente._id,
            nome: cliente.nome,
            fone: cliente.fone,
            email: cliente.email
          }
        })
      }))
      .subscribe(
        (clientes) => {
          this.clientes = clientes;
          this.listaClientesAtualizada.next([...this.clientes]);
        }
      )
  }

  getCliente(idCliente: string): any {
    return { ...this.clientes.find(cli => cli.id === idCliente) }
    // {id: "fewa", nome: "feawfewa", fone: 'fewafwea', email: "fewafea"}
    // id: "fewa", nome: "feawfewa", fone: 'fewafwea', email: "fewafea"
    // {id: "fewa", nome: "feawfewa", fone: 'fewafwea', email: "fewafea"}
  }

  adicionarCliente(nome: string, fone: string, email: string) {
    const cliente: Cliente = {
      id: null,
      nome: nome,
      fone: fone,
      email: email,
    };
    this.httpClient.post<{ mensagem: string, id: string }>('http://localhost:3000/api/clientes',
      cliente).subscribe(
        (dados) => {
          cliente.id = dados.id;
          this.clientes.push(cliente);
          this.listaClientesAtualizada.next([...this.clientes]);
          this.router.navigate(['/']);
        }
      )
  }

  getListaDeClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }

  removerCliente(id: string): void {
    this.httpClient.delete(`http://localhost:3000/api/clientes/${id}`).subscribe(() => {
      this.clientes = this.clientes.filter((cli) => cli.id !== id)
      this.listaClientesAtualizada.next([...this.clientes])
    });
  }
  atualizarCliente(id: string, nome: string, fone: string, email: string) {
    const cliente: Cliente = { id, nome, fone, email };
    this.httpClient.put(`http://localhost:3000/api/clientes/${id}`, cliente)
      .subscribe((res => {
        const copia = [...this.clientes];
        const indice = copia.findIndex(cli => cli.id === cliente.id);
        copia[indice] = cliente;
        this.clientes = copia;
        this.listaClientesAtualizada.next([...this.clientes]);
        this.router.navigate(['/'])
      }));
  }
}
