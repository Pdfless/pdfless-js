import {deserializeIntoDocumentTemplateDto} from './deserializeIntoDocumentTemplateDto';
import {DocumentTemplateDto} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentTemplateDtoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentTemplateDto;
}
