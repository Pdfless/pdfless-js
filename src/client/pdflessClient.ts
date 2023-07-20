import {WithVersionRequestBuilder} from './withVersion/withVersionRequestBuilder';
import {BaseRequestBuilder, enableBackingStoreForSerializationWriterFactory, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {FormParseNodeFactory, FormSerializationWriterFactory} from '@microsoft/kiota-serialization-form';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export class PdflessClient extends BaseRequestBuilder {
    /**
     * Instantiates a new PdflessClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        super({}, requestAdapter, "{+baseurl}");
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultSerializer(FormSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        registerDefaultDeserializer(FormParseNodeFactory);
    };
    /**
     * Builds and executes requests for operations under /v{version}
     * @returns a WithVersionRequestBuilder
     */
    public withVersion(version: string | undefined) : WithVersionRequestBuilder {
        if(!version) throw new Error("version cannot be undefined");
        return new WithVersionRequestBuilder(this.pathParameters, this.requestAdapter, version);
    };
}
