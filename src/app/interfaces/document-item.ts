import { SimpleCalcData } from "./simple-calc-data";

export type DocumentItemTypes = "image" | "staticText" | "calculator" | "freeText"

export interface DocumentItem {
    id: string,
    description: string,
    icon: string,
    type: DocumentItemTypes,
    data?: string | SimpleCalcData
}

