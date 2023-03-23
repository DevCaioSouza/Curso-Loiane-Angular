import { Injectable } from "@angular/core";

//o decorator Injectable indica que essa é uma classe injetável
@Injectable()

export class CursosService {

  getCursos(){
    return ['Angular', 'Java', 'Python'];
  }

}