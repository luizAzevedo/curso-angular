import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css'],
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `,
  ],
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.traning.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  valorAtual = '';
  valorSalvo: any;

  isMouseOver = false;

  constructor() {}

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado(): void {
    alert('oi');
  }

  onKeyUp(evento: KeyboardEvent): void {
    // console.log((evento.target as HTMLInputElement).value);
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor: any): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit(): void {}
}
