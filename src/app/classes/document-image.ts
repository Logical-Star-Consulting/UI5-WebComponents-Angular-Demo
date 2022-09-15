import { DocumentItem } from '../interfaces/document-item';
import { DocumentItemTypes } from '../interfaces/document-item';

export class DocumentImage implements DocumentItem{
    id: string = "";
    description: string = "";
    icon: string = "image";
    type: DocumentItemTypes = "image";
    data: string = "";
    constructor(id: string, description: string, path: string){
        this.id = id;
        this.description = description;
        this.data = path;
    }
}
