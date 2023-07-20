import {PDFDto} from './pDFDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePDFDto(writer: SerializationWriter, pDFDto: PDFDto | undefined = {} as PDFDto) : void {
        writer.writeDateValue("created_at", pDFDto.created_at);
        writer.writeStringValue("download_url", pDFDto.download_url);
        writer.writeDateValue("expires", pDFDto.expires);
        writer.writeStringValue("reference_id", pDFDto.reference_id);
        writer.writeStringValue("template_id", pDFDto.template_id);
}
