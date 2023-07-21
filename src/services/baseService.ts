import { ApiKeyAuthenticationProvider, ApiKeyLocation } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { PdflessClient } from "../client/pdflessClient";

const PDFLESS_BASE_URL = 'https://api.pdfless.com';

export abstract class BaseService {
    protected version: string = "1";
    protected client: PdflessClient | undefined;

    protected constructor(apiKey: string, version: string = "1") {
        this.init(apiKey, version);
    };

    protected init(apiKey: string, version: string = "1") {
        const authProvider = new ApiKeyAuthenticationProvider(apiKey, "apikey", ApiKeyLocation.Header);
        const adapter = new FetchRequestAdapter(authProvider);
        adapter.baseUrl = PDFLESS_BASE_URL;
        this.client = new PdflessClient(adapter);
        this.version = version;
    }

    
}