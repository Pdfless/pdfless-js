import {deserializeIntoWorkspaceDto} from './deserializeIntoWorkspaceDto';
import {WorkspaceDto} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkspaceDtoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkspaceDto;
}
