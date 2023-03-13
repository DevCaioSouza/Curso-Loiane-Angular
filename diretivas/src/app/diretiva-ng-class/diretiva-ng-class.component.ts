import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.css']
})
export class DiretivaNgClassComponent {

  meuFavorito: boolean = false;
  randomNumber: string = 'Clique para iniciar';
  arrowDirection: string = "";

  onClickOnStar(){
    this.meuFavorito = !this.meuFavorito
  }

  onArrowClicked(){
    
    this.randomNumber = Math.floor((Math.random() * 4)).toString()
    
    console.log(this.randomNumber)

    switch (this.randomNumber){
      case '0': this.arrowDirection = "left";
        break;
      case '1': this.arrowDirection = "up";
        break;
      case '2': this.arrowDirection = "right";
        break;
      case '3': this.arrowDirection = "down";
        break
    }

  }

}
