import {ApiExceptionDetailsResult, DocumentTemplateDto} from '../../models/';
import {createApiExceptionDetailsResultFromDiscriminatorValue} from '../../models/createApiExceptionDetailsResultFromDiscriminatorValue';
import {createDocumentTemplateDtoFromDiscriminatorValue} from '../../models/createDocumentTemplateDtoFromDiscriminatorValue';
import {deserializeIntoApiExceptionDetailsResult} from '../../models/deserializeIntoApiExceptionDetailsResult';
import {serializeApiExceptionDetailsResult} from '../../models/serializeApiExceptionDetailsResult';
import {DocumentTemplatesRequestBuilderGetRequestConfiguration} from './documentTemplatesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v{version}/document-templates
 */
export class DocumentTemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DocumentTemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v{version}/document-templates{?Page*,PageSize*}");
    };
    /**
     * List document templates of current workspace
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DocumentTemplateDto
     */
    public get(requestConfiguration?: DocumentTemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<DocumentTemplateDto[] | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "500": createApiExceptionDetailsResultFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendCollectionAsync<DocumentTemplateDto>(requestInfo, createDocumentTemplateDtoFromDiscriminatorValue, errorMapping);
    };
    /**
     * List document templates of current workspace
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DocumentTemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["text/plain"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
