import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.sass']
})
export class CadastrarComponent implements OnInit {
  constructor(private http: HttpClient,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  usuario: any;

  ngOnInit() {
    let id: any = this.activatedRoute.snapshot.params["id"];
    if(id) {
      this.http.get('http://localhost:8080/bd/pegar/' + id)
      .subscribe(data => {
        console.log(data);
        this.usuario = data;
      });
    }
  }

  formatarCPF(event: Event): void {
    let input = event.target as HTMLInputElement;
    let cpf = input.value;

    // Remove todos os caracteres não numéricos
    let cpfNumerico = cpf.replace(/\D/g, '');

    // Aplica a formatação xxx.xxx.xxx-xx
    let cpfFormatado = cpfNumerico.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    // Limita a 11 caracteres
    cpfFormatado = cpfFormatado.slice(0, 14);

    // Atualiza o valor do campo CPF com a formatação
    input.value = cpfFormatado;
  }

  formatarData(event: Event): void {
    let input = event.target as HTMLInputElement;
    let data = input.value;

    // Remove todos os caracteres não numéricos
    let dataNumerica = data.replace(/\D/g, '');

    // Aplica a formatação dd/mm/aaaa
    let dataFormatada = dataNumerica.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    // Limita a 10 caracteres
    dataFormatada = dataFormatada.slice(0, 10);

    // Atualiza o valor do campo Data de Nascimento com a formatação
    input.value = dataFormatada;
  }

  formatarEmail(event: Event) {

  }

  postUsuario(nome: string , senha: string, cpf: string, data_nascimento: string) {
    // Formata o CPF antes de enviar
    let cpfFormatado = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let userObj: any = { nome: nome, senha: senha, cpf: cpfFormatado, data_nascimento: data_nascimento };
    this.http.post(`http://localhost:8080/`, userObj)
    .subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigateByUrl('/listar');
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  putUsuario(nome: string , senha: string, cpf: string, data_nascimento: string, id: string) {
    // Formata o CPF antes de enviar
    let cpfFormatado = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let userObj: any = { nome: nome, cpf: cpfFormatado, data_nascimento: data_nascimento };
    this.http.put('http://localhost:8080/' + id, userObj)
    .subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/');
    });
  }
}
