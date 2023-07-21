import { GeneratePDFCommand, PDFDtoApiResult, WorkspaceDto } from "../client/models";
import { BaseService } from "./baseService";

export class TemplateService extends BaseService{
    
    public constructor(apiKey: string, version: string = "1") {
        super(apiKey, version);
    }

    public async list(page: number = 1, pageSize: number = 25) {
        if (!this.client) {
            throw new TypeError('API key is not defined');
        }

        const requestConfiguration = { queryParameters : 
        {
            page: page,
            pageSize: pageSize
        }};

        return await this.client.withVersion(this.version)
            .documentTemplates.get(requestConfiguration);
    }
}