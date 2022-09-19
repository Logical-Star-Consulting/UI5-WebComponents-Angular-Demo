import { Component, OnInit, Input } from '@angular/core';
import { DocumentItem } from 'src/app/interfaces/document-item';

@Component({
  selector: 'app-doc-image',
  templateUrl: './doc-image.component.html',
  styleUrls: ['./doc-image.component.css']
})
export class DocImageComponent implements OnInit {
  @Input() item!: DocumentItem;  //Decorate the property with @Input() 

  constructor() { }

  ngOnInit(): void {
  }

}
