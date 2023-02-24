import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {

  @Input('nome') nomeCurso: string = '';
  @Input('aluno') nomeAluno: string = '';
  @Input('animal') nomeAnimal: string = '';
  @Input('pais') nomePais: string = '';

}
