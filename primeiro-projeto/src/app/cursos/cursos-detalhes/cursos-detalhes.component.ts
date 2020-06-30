import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css'],
})
export class CursosDetalhesComponent implements OnInit {
  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    this.nomePortal = 'http://loiane.training.com';
  }

  ngOnInit(): void {}
}
