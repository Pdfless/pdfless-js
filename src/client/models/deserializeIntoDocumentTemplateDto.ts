import {DocumentTemplateDto} from './documentTemplateDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDocumentTemplateDto(documentTemplateDto: DocumentTemplateDto | undefined = {} as DocumentTemplateDto) : Record<string, (node: ParseNode) => void> {
    return {
        "created": n => { documentTemplateDto.created = n.getDateValue(); },
        "id": n => { documentTemplateDto.id = n.getStringValue(); },
        "imagePreviewUrl": n => { documentTemplateDto.imagePreviewUrl = n.getStringValue(); },
        "modified": n => { documentTemplateDto.modified = n.getDateValue(); },
        "name": n => { documentTemplateDto.name = n.getStringValue(); },
        "pdfPreviewUrl": n => { documentTemplateDto.pdfPreviewUrl = n.getStringValue(); },
    }
}
