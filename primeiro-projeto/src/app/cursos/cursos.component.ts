import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: string;
  cursos: string[] = ['Java', 'ExtJS', 'Angular'];
  materias: string[] = ["Módulos", "Diretivas","Templates" , "Injeção de Dependência"];
  diretivas: string[] = ["ngIf", "ngSwitch", "ngSwitchCase", "ngSwitchDefault", "ngFor", "ngClass", "ngStyle", "ng-content", "Diretivas de Atributo"]

  constructor(){
    this.nomePortal = 'http://loiane.training';
  }

}
