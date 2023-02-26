import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight{ 
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = 'https://picsum.photos/id/237/200/300';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: '(Nome)',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';
  nomeDoAluno: string = 'Caio';
  nomeDoAnimal: string = 'Gato';
  nomeDoPais: string = 'Bielorússia';

  valorInicial = 15;

  getValor(): number {
    return 1;
  }

  getCurtirCurso() {
    return true
  }

  onMouseClick(){
    alert('Event Binding do click funcionando')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: any){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor)
  }

}
