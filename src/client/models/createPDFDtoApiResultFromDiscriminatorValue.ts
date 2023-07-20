import {deserializeIntoPDFDtoApiResult} from './deserializeIntoPDFDtoApiResult';
import {PDFDtoApiResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPDFDtoApiResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPDFDtoApiResult;
}
