import {GeneratePDFCommand} from './generatePDFCommand';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGeneratePDFCommand(generatePDFCommand: GeneratePDFCommand | undefined = {} as GeneratePDFCommand) : Record<string, (node: ParseNode) => void> {
    return {
        "reference_id": n => { generatePDFCommand.reference_id = n.getStringValue(); },
        "template_id": n => { generatePDFCommand.template_id = n.getStringValue(); },
    }
}
