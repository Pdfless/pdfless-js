import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkspaceDto extends Parsable {
    /**
     * Active status of workspace
     */
    active?: boolean | undefined;
    /**
     * Creation date
     */
    created?: Date | undefined;
    /**
     * Modification date
     */
    modified?: Date | undefined;
    /**
     * Name of workspace
     */
    name?: string | undefined;
}
