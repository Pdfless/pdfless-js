import {PDFDto} from './pDFDto';
import {PDFDtoApiResult} from './pDFDtoApiResult';
import {serializePDFDto} from './serializePDFDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePDFDtoApiResult(writer: SerializationWriter, pDFDtoApiResult: PDFDtoApiResult | undefined = {} as PDFDtoApiResult) : void {
        writer.writeObjectValue<PDFDto>("data", pDFDtoApiResult.data, serializePDFDto);
        writer.writeStringValue("status", pDFDtoApiResult.status);
}
