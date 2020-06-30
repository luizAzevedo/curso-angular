import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url = 'http://loiane.traning.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  constructor() {}

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  ngOnInit(): void {}
}
