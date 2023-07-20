import {WorkspaceDto} from './workspaceDto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkspaceDto(writer: SerializationWriter, workspaceDto: WorkspaceDto | undefined = {} as WorkspaceDto) : void {
        writer.writeBooleanValue("active", workspaceDto.active);
        writer.writeDateValue("created", workspaceDto.created);
        writer.writeDateValue("modified", workspaceDto.modified);
        writer.writeStringValue("name", workspaceDto.name);
}
