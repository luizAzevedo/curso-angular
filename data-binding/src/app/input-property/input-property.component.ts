import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs:['nomeCurso'] -- Use @Input rather than the `inputs` metadata property
})
export class InputPropertyComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('nome') nomeCurso = '';

  constructor() {}

  ngOnInit(): void {}
}
