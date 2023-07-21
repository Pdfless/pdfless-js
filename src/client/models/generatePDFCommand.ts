import {Parsable} from '@microsoft/kiota-abstractions';

export interface GeneratePDFCommand extends Parsable {
    /**
     * The payload property
     */
    payload?: string | undefined;
    /**
     * The reference_id property
     */
    reference_id?: string | undefined;
    /**
     * The template_id property
     */
    template_id?: string | undefined;
}
