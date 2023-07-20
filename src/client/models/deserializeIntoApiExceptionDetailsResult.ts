import {ApiExceptionDetailsResult} from './apiExceptionDetailsResult';
import {ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApiExceptionDetailsResult(apiExceptionDetailsResult: ApiExceptionDetailsResult | undefined = {} as ApiExceptionDetailsResult) : Record<string, (node: ParseNode) => void> {
    return {
        "correlation_id": n => { apiExceptionDetailsResult.correlation_id = n.getStringValue(); },
        "documentation_url": n => { apiExceptionDetailsResult.documentation_url = n.getStringValue(); },
        "error_code": n => { apiExceptionDetailsResult.error_code = n.getStringValue(); },
        "message": n => { apiExceptionDetailsResult.messageEscaped = n.getStringValue(); },
    }
}
