import {ApiError, Parsable} from '@microsoft/kiota-abstractions';

export interface ApiExceptionDetailsResult extends ApiError, Parsable {
    /**
     * The correlation_id property
     */
    correlation_id?: string | undefined;
    /**
     * The documentation_url property
     */
    documentation_url?: string | undefined;
    /**
     * The error_code property
     */
    error_code?: string | undefined;
    /**
     * The message property
     */
    messageEscaped?: string | undefined;
}
