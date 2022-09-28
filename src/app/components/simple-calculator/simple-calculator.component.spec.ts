import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleCalculatorComponent } from './simple-calculator.component';
import { FormsModule } from '@angular/forms';

import { DocumentItem } from '../../interfaces/document-item';

import '@ui5/webcomponents/dist/features/InputElementsFormSupport';

describe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCalculatorComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;

    var myCalc: DocumentItem = {
      id: "simpleCalculator",
      description: "Simple Calculator",
      type: "calculator",
      icon: "calculate",
      data: {
        summand1: 0,
        summand2: 0,
        total: 0,
        simpleCalcSubmitted: false
      }
    }

    component.item = myCalc;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
