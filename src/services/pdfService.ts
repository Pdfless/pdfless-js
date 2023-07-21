import { GeneratePDFCommand, PDFDtoApiResult, WorkspaceDto } from "../client/models";
import { BaseService } from "./baseService";

export class PdfService extends BaseService{
    
    public constructor(apiKey: string, version: string = "1") {
        super(apiKey, version);
    }

    public async generate(command: GeneratePDFCommand): Promise<PDFDtoApiResult | undefined>{
        if (!this.client) {
            throw new TypeError('API key is not defined');
        }

        if (!command) {
            throw new TypeError('Parameter of type GeneratePDFCommand cannot be null');
        }

        return await this.client.withVersion(this.version)
            .pdfs.post(command);
    }
}