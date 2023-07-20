import {WorkspaceDto} from './workspaceDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkspaceDto(workspaceDto: WorkspaceDto | undefined = {} as WorkspaceDto) : Record<string, (node: ParseNode) => void> {
    return {
        "active": n => { workspaceDto.active = n.getBooleanValue(); },
        "created": n => { workspaceDto.created = n.getDateValue(); },
        "modified": n => { workspaceDto.modified = n.getDateValue(); },
        "name": n => { workspaceDto.name = n.getStringValue(); },
    }
}
