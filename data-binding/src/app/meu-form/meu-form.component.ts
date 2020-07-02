import { Component, OnInit } from '@angular/core';

interface IPessoa {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent implements OnInit {
  nome = 'abc';

  pessoa: IPessoa = {
    nome: 'def',
    idade: 20,
  };


  constructor() {}

  ngOnInit(): void {}
}
