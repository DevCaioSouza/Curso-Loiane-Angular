import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  //outputs: ['mudouValor'] | essa diretiva pode ser exposta como metadado;
})
export class OutputPropertyComponent {

  @Input() valor = 10;

  @Output() mudouValor = new EventEmitter();
  //usamos Output quando queremos expor eventos ou valores

  decrement(){
    this.valor--
    this.mudouValor.emit({novoValor: this.valor});
  };

  increment(){
    this.valor++
    this.mudouValor.emit({novoValor: this.valor});
  };

}
