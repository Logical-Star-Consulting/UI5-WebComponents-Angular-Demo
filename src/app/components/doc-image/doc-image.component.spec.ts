import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocImageComponent } from './doc-image.component';

import { DocumentImage } from '../../classes/document-image';

describe('DocImageComponent', () => {
  let component: DocImageComponent;
  let fixture: ComponentFixture<DocImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocImageComponent);
    component = fixture.componentInstance;

    const expectedDocImage = new DocumentImage("UI5Logo",  "UI5 Logo",  "assets/images/UI5Logo.png");
    component.item = expectedDocImage;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
