import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem  } from '@angular/cdk/drag-drop';


//UI5 Components
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Menu";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Input";

// Fiori Components
import "@ui5/webcomponents-fiori/dist/SideNavigation";
import "@ui5/webcomponents-fiori/dist/SideNavigationItem"; 
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem"
import "@ui5/webcomponents-fiori/dist/ShellBar";

// Icons
import "@ui5/webcomponents-icons/dist/print";
import "@ui5/webcomponents-icons/dist/picture";
import "@ui5/webcomponents-icons/dist/menu";
import "@ui5/webcomponents-icons/dist/document-text";
import "@ui5/webcomponents-icons/dist/simulate";
import "@ui5/webcomponents-icons/dist/clear-all";

import { DocumentItem } from './interfaces/document-item';
import { DocumentItemTypes } from './interfaces/document-item';
import { SimpleCalcData } from './interfaces/simple-calc-data';
import { DocumentImage } from './classes/document-image';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI5 Web Components Doc Builder App';
  userName = "Katan";

  // Document Options 
  docDefaultText: DocumentItem = {
    id: "DefaultText",
    description: "Default Text",
    type: "text",
    icon: "subject",
    data: "This is some default text to show"
  }


  defaultDocBody = [this.docDefaultText]; // Default Document Body Items When Clearing 
  docOptions = [this.docDefaultText]; // Options that can be added to the document
  docBody = [this.docDefaultText]; // Array of items that make up the document


  // Event Handling
  drop(event: CdkDragDrop<DocumentItem[]>){

  }


  onClearButtonClick(){
    this.docBody =this.defaultDocBody;
  }
}
