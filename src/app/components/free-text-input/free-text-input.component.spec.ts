import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTextInputComponent } from './free-text-input.component';

describe('FreeTextInputComponent', () => {
  let component: FreeTextInputComponent;
  let fixture: ComponentFixture<FreeTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
