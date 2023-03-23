import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: string[] = [];
  //cursosService: CursosService;

  //o private no construtor faz com que cursosService seja
  //um atributo da classe CursosComponent automaticamente
  constructor(private cursosService: CursosService){
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }

}
