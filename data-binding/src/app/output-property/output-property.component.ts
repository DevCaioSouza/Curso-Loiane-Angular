import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

  @ViewChild('campoInput')
  campoValorInput!: ElementRef;

  decrement(){
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valor});
  };

  increment(){
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valor});
  };

}
