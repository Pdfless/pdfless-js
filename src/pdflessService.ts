import { ApiKeyAuthenticationProvider, ApiKeyLocation } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { PdflessClient } from "./client/pdflessClient";
import { GeneratePDFCommand, PDFDtoApiResult, WorkspaceDto } from "./client/models";

const PDFLESS_BASE_URL = 'https://api.pdfless.com';

export class PdflessService {
    private version: string = "1";
    private client: PdflessClient | undefined;

    public constructor(apiKey: string, version: string = "1") {
        this.init(apiKey, version);
    };

    public init(apiKey: string, version: string = "1") {
        const authProvider = new ApiKeyAuthenticationProvider(apiKey, "apikey", ApiKeyLocation.Header);
        const adapter = new FetchRequestAdapter(authProvider);
        adapter.baseUrl = PDFLESS_BASE_URL;
        this.client = new PdflessClient(adapter);
        this.version = version;
    }

    public async getWorkspace(): Promise<WorkspaceDto | undefined> {
        if (!this.client) {
            throw new TypeError('API key is not defined');
        }

        return await this.client.withVersion(this.version)
            .workspaces.get();
    }
    public async generatePDF(command: GeneratePDFCommand): Promise<PDFDtoApiResult | undefined>{
        if (!this.client) {
            throw new TypeError('API key is not defined');
        }

        if (!command) {
            throw new TypeError('Parameter of type GeneratePDFCommand cannot be null');
        }

        return await this.client.withVersion(this.version)
            .pdfs.post(command);
    }
    public async listDocumentTemplates(page: number = 1, pageSize: number = 25) {
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