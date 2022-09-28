import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import { DocImageComponent } from './components/doc-image/doc-image.component';
import { FreeTextInputComponent } from './components/free-text-input/free-text-input.component';
import { SimpleCalculatorComponent } from './components/simple-calculator/simple-calculator.component';



@NgModule({
  declarations: [
    AppComponent,
    DocImageComponent,
    FreeTextInputComponent,
    SimpleCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  exports: [
    BrowserModule,
    FormsModule,  
    BrowserAnimationsModule,
    DragDropModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
