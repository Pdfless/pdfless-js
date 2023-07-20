import {deserializeIntoGeneratePDFCommand} from './deserializeIntoGeneratePDFCommand';
import {GeneratePDFCommand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGeneratePDFCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGeneratePDFCommand;
}
