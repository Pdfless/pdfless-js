import {ApiExceptionDetailsResult, WorkspaceDto} from '../../models/';
import {createApiExceptionDetailsResultFromDiscriminatorValue} from '../../models/createApiExceptionDetailsResultFromDiscriminatorValue';
import {createWorkspaceDtoFromDiscriminatorValue} from '../../models/createWorkspaceDtoFromDiscriminatorValue';
import {deserializeIntoApiExceptionDetailsResult} from '../../models/deserializeIntoApiExceptionDetailsResult';
import {serializeApiExceptionDetailsResult} from '../../models/serializeApiExceptionDetailsResult';
import {WorkspacesRequestBuilderGetRequestConfiguration} from './workspacesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v{version}/workspaces
 */
export class WorkspacesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WorkspacesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v{version}/workspaces");
    };
    /**
     * Get workspace detail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkspaceDto
     */
    public get(requestConfiguration?: WorkspacesRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkspaceDto | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "500": createApiExceptionDetailsResultFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkspaceDto>(requestInfo, createWorkspaceDtoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get workspace detail
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WorkspacesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["text/plain"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
