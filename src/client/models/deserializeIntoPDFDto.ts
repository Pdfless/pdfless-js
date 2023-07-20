import {PDFDto} from './pDFDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPDFDto(pDFDto: PDFDto | undefined = {} as PDFDto) : Record<string, (node: ParseNode) => void> {
    return {
        "created_at": n => { pDFDto.created_at = n.getDateValue(); },
        "download_url": n => { pDFDto.download_url = n.getStringValue(); },
        "expires": n => { pDFDto.expires = n.getDateValue(); },
        "reference_id": n => { pDFDto.reference_id = n.getStringValue(); },
        "template_id": n => { pDFDto.template_id = n.getStringValue(); },
    }
}
