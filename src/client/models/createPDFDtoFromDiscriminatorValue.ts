import {deserializeIntoPDFDto} from './deserializeIntoPDFDto';
import {PDFDto} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPDFDtoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPDFDto;
}
