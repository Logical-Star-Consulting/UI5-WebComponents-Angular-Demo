import { Component, OnInit, Input } from '@angular/core';
import { DocumentItem } from 'src/app/interfaces/document-item';

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport";
import { SimpleCalcData } from 'src/app/interfaces/simple-calc-data';


@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {
  @Input() item!: DocumentItem;  //Decorate the property with @Input() 

  constructor() { }

  ngOnInit(): void {
  }

  onSimpleCalcSubmit(event: DocumentItem){
    (<SimpleCalcData>event.data).simpleCalcSubmitted = true;
    (<SimpleCalcData>event.data).total = +(<SimpleCalcData>event.data).summand1 + +(<SimpleCalcData>event.data).summand2;
  }

}
