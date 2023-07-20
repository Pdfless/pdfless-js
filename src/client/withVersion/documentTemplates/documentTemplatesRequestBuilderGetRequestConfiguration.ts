import {DocumentTemplatesRequestBuilderGetQueryParameters} from './documentTemplatesRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface DocumentTemplatesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]> | undefined;
    /**
     * Request options
     */
    options?: RequestOption[] | undefined;
    /**
     * Request query parameters
     */
    queryParameters?: DocumentTemplatesRequestBuilderGetQueryParameters | undefined;
}
