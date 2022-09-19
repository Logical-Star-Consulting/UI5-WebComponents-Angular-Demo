import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleCalculatorComponent } from './simple-calculator.component';

import '@ui5/webcomponents/dist/features/InputElementsFormSupport';

describe('SimpleCalculatorComponent', () => {
  let component: SimpleCalculatorComponent;
  let fixture: ComponentFixture<SimpleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
