import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.print.css']
})
export class AppComponent {
  title = 'Logical Star';
  subTitle = 'Document Builder';

  // Document Option Instances 
  docDefaultText: DocumentItem = {
    id: "DefaultText",
    description: "Default Text",
    type: "staticText",
    icon: "subject",
    data: "This is some default text to show"
  }

  ui5Logo: DocumentItem = {
    id: "UI5Logo",
    description: "UI5 Logo",
    type: "image",
    icon: "image",
    data: "assets/images/UI5Logo.png"
  }

  docFreeText: DocumentItem = {
    id: "DocFreeText",
    description: "Free Text",
    type: "freeText",
    icon: "edit_note",
    data: ""
  }



  // Options that can be added to the document
  docOptions = [this.docDefaultText, this.ui5Logo, this.docFreeText];

  // Document State 
  defaultDocBody = [this.ui5Logo]; // Default Document Body Items When Clearing 
  docBody = [this.ui5Logo]; // Array of items that make up the document

  // Event Handling
  drop(event: CdkDragDrop<DocumentItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else if (event.previousContainer.id === "docOptions") {
      var newDocItem = Object.create(event.previousContainer.data[event.previousIndex]);
      if (newDocItem.id === "simpleCalculator") {
        newDocItem = this.createCalculator();
      }

      event.container.data.push(newDocItem);
    }
  }

  onClearButtonClick() {
    this.docBody = this.defaultDocBody;
  }

  onSideNavigationSelection($event: any) {
    // Index of the document option in docOptions
    const docDefaultTextItem = 0;
    const docUI5LogoItem = 1;
    const docFreeTextItem = 2;

    var itemIndex = 0;
    var newDocItem = null;

    switch ($event.detail.item.title) {
      case "Add Default Text":
        itemIndex = docDefaultTextItem;
        break;
      case "Add UI5 Logo":
        itemIndex = docUI5LogoItem;
        break;

      case "Add Free Text":
        itemIndex = docFreeTextItem;
        break;
      case "Simple Calculator":
        newDocItem = this.createCalculator();
        break;
      default:
        return; // Exit and do nothing
    }

    if(newDocItem === null){
      newDocItem = Object.create(this.docOptions[itemIndex]);
    }
    
    this.docBody.push(newDocItem);
  }

  // Methods
  createCalculator(): DocumentItem {
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
    return myCalc;
  }
}
