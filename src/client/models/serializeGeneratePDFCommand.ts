import {GeneratePDFCommand} from './generatePDFCommand';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGeneratePDFCommand(writer: SerializationWriter, generatePDFCommand: GeneratePDFCommand | undefined = {} as GeneratePDFCommand) : void {
        writer.writeStringValue("payload", generatePDFCommand.payload);
        writer.writeStringValue("reference_id", generatePDFCommand.reference_id);
        writer.writeStringValue("template_id", generatePDFCommand.template_id);
}
