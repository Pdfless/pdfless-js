import {DocumentTemplatesRequestBuilder} from './documentTemplates/documentTemplatesRequestBuilder';
import {PdfsRequestBuilder} from './pdfs/pdfsRequestBuilder';
import {WorkspacesRequestBuilder} from './workspaces/workspacesRequestBuilder';
import {BaseRequestBuilder, RequestAdapter} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v{version}
 */
export class WithVersionRequestBuilder extends BaseRequestBuilder {
    /**
     * The documentTemplates property
     */
    public get documentTemplates(): DocumentTemplatesRequestBuilder {
        return new DocumentTemplatesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The pdfs property
     */
    public get pdfs(): PdfsRequestBuilder {
        return new PdfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * The workspaces property
     */
    public get workspaces(): WorkspacesRequestBuilder {
        return new WorkspacesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new WithVersionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, version?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/v{version}");
        this.pathParameters["version"] = version
    };
}
