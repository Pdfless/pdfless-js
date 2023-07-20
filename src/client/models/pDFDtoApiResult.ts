import {PDFDto} from './pDFDto';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PDFDtoApiResult extends Parsable {
    /**
     * The data property
     */
    data?: PDFDto | undefined;
    /**
     * The status property
     */
    status?: string | undefined;
}
