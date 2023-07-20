import {createPDFDtoFromDiscriminatorValue} from './createPDFDtoFromDiscriminatorValue';
import {PDFDto} from './pDFDto';
import {PDFDtoApiResult} from './pDFDtoApiResult';
import {serializePDFDto} from './serializePDFDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPDFDtoApiResult(pDFDtoApiResult: PDFDtoApiResult | undefined = {} as PDFDtoApiResult) : Record<string, (node: ParseNode) => void> {
    return {
        "data": n => { pDFDtoApiResult.data = n.getObjectValue<PDFDto>(createPDFDtoFromDiscriminatorValue); },
        "status": n => { pDFDtoApiResult.status = n.getStringValue(); },
    }
}
