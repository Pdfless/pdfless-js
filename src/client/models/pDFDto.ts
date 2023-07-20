import {Parsable} from '@microsoft/kiota-abstractions';

export interface PDFDto extends Parsable {
    /**
     * Creation date
     */
    created_at?: Date | undefined;
    /**
     * URL of generated document
     */
    download_url?: string | undefined;
    /**
     * Expiration date
     */
    expires?: Date | undefined;
    /**
     * Internal reference identifier
     */
    reference_id?: string | undefined;
    /**
     * Targeting template identifier
     */
    template_id?: string | undefined;
}
