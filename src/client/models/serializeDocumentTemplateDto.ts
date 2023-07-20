import {DocumentTemplateDto} from './documentTemplateDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDocumentTemplateDto(writer: SerializationWriter, documentTemplateDto: DocumentTemplateDto | undefined = {} as DocumentTemplateDto) : void {
        writer.writeDateValue("created", documentTemplateDto.created);
        writer.writeStringValue("id", documentTemplateDto.id);
        writer.writeStringValue("imagePreviewUrl", documentTemplateDto.imagePreviewUrl);
        writer.writeDateValue("modified", documentTemplateDto.modified);
        writer.writeStringValue("name", documentTemplateDto.name);
        writer.writeStringValue("pdfPreviewUrl", documentTemplateDto.pdfPreviewUrl);
}
