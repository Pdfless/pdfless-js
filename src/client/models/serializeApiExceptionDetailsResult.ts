import {ApiExceptionDetailsResult} from './apiExceptionDetailsResult';
import {ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiExceptionDetailsResult(writer: SerializationWriter, apiExceptionDetailsResult: ApiExceptionDetailsResult | undefined = {} as ApiExceptionDetailsResult) : void {
        writer.writeStringValue("correlation_id", apiExceptionDetailsResult.correlation_id);
        writer.writeStringValue("documentation_url", apiExceptionDetailsResult.documentation_url);
        writer.writeStringValue("error_code", apiExceptionDetailsResult.error_code);
        writer.writeStringValue("message", apiExceptionDetailsResult.messageEscaped);
}
