import { GeneratePDFCommand, PDFDtoApiResult, WorkspaceDto } from "../client/models";
import { BaseService } from "./baseService";

export class WorkspaceService extends BaseService{
    
    public constructor(apiKey: string, version: string = "1") {
        super(apiKey, version);
    }

    public async get(): Promise<WorkspaceDto | undefined> {
        if (!this.client) {
            throw new TypeError('API key is not defined');
        }

        return await this.client.withVersion(this.version)
            .workspaces.get();
    }
}