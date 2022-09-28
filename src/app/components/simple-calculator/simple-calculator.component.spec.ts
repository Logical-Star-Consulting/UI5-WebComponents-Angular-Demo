import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleCalculatorComponent } from './simple-calculator.component';
import { FormsModule } from '@angular/forms';

import { DocumentItem } from '../../interfaces/document-item';
import { SimpleCalcData } from 'src/app/interfaces/simple-calc-data';

import '@ui5/webcomponents/dist/features/InputElementsFormSupport';

describe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleCalculatorComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;

    const myCalc: DocumentItem = {
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

  // Check the Document Title
  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.simpleCalculatorTitle')?.textContent).toContain('Simple Calculator');
  });

  // Check the Summand 1
  it('should render summand 1', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.simpleCalculatorSummand1')?.textContent).toContain('Summand 1');
  });

  // Check the Summand 2
  it('should render summand 2', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.simpleCalculatorSummand2')?.textContent).toContain('Summand 2');
  });

  // Totals
  it('should not render total if not calculated', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.simpleCalculatorTotal')?.textContent).toBeUndefined();
  });

  it('should render total if calculated', () => {
    (<SimpleCalcData>fixture.componentRef.instance.item.data).simpleCalcSubmitted = true;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.simpleCalculatorTotal')?.textContent).toContain('Total');
  });


});
