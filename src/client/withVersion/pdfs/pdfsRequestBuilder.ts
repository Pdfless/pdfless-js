import {ApiExceptionDetailsResult} from '../../models/';
import {createApiExceptionDetailsResultFromDiscriminatorValue} from '../../models/createApiExceptionDetailsResultFromDiscriminatorValue';
import {createPDFDtoApiResultFromDiscriminatorValue} from '../../models/createPDFDtoApiResultFromDiscriminatorValue';
import {deserializeIntoApiExceptionDetailsResult} from '../../models/deserializeIntoApiExceptionDetailsResult';
import {deserializeIntoGeneratePDFCommand} from '../../models/deserializeIntoGeneratePDFCommand';
import {deserializeIntoPDFDtoApiResult} from '../../models/deserializeIntoPDFDtoApiResult';
import {GeneratePDFCommand} from '../../models/generatePDFCommand';
import {PDFDtoApiResult} from '../../models/pDFDtoApiResult';
import {serializeApiExceptionDetailsResult} from '../../models/serializeApiExceptionDetailsResult';
import {serializeGeneratePDFCommand} from '../../models/serializeGeneratePDFCommand';
import {serializePDFDtoApiResult} from '../../models/serializePDFDtoApiResult';
import {PdfsRequestBuilderPostRequestConfiguration} from './pdfsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /v{version}/pdfs
 */
export class PdfsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PdfsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/v{version}/pdfs");
    };
    /**
     * Generate document based on template ID and payload data
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PDFDtoApiResult
     */
    public post(body: GeneratePDFCommand | undefined, requestConfiguration?: PdfsRequestBuilderPostRequestConfiguration | undefined) : Promise<PDFDtoApiResult | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "500": createApiExceptionDetailsResultFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PDFDtoApiResult>(requestInfo, createPDFDtoApiResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Generate document based on template ID and payload data
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GeneratePDFCommand | undefined, requestConfiguration?: PdfsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["text/plain"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGeneratePDFCommand);
        return requestInfo;
    };
}
