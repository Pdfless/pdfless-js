import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentTemplateDto extends Parsable {
    /**
     * Creation date
     */
    created?: Date | undefined;
    /**
     * Template identifier
     */
    id?: string | undefined;
    /**
     * Image preview of document template
     */
    imagePreviewUrl?: string | undefined;
    /**
     * Modification date
     */
    modified?: Date | undefined;
    /**
     * Template name
     */
    name?: string | undefined;
    /**
     * PDF preview of document template
     */
    pdfPreviewUrl?: string | undefined;
}
