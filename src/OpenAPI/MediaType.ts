import {SerializableInterface} from "../Serializer/Serializer";
import {Encoding} from "./Encoding";
import {Example} from "./Example";
import {Reference} from "./Reference";
import {Schema} from "./Schema/Schema";

export interface MediaTypeInterface {
    encoding?: { [_: string]: Encoding; };

    example?: any;

    examples?: { [_: string]: string | Example | Reference; };

    schema?: Schema | Reference;
}

/**
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#media-type-object
 */
export class MediaType implements MediaTypeInterface, SerializableInterface {
    public constructor(properties: MediaTypeInterface) {
        Object.assign(this, properties);
    }

    /**
     * A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to `requestBody` objects when the media type is `multipart` or `application/x-www-form-urlencoded`.
     */
    public encoding?: { [_: string]: Encoding; };

    /**
     * Example of the media type. The example object SHOULD be in the correct format as specified by the media type. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` which contains an `example`, the example value SHALL _override_ the example provided by the schema.
     */
    public example?: any;

    /**
     * Examples of the media type. Each example object SHOULD match the media type and specified schema if present. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` which contains an example, the `examples` value SHALL _override_ the example provided by the schema.
     */
    public examples?: { [_: string]: string | Example | Reference; };

    /**
     * The schema defining the content of the request, response, or parameter.
     */
    public schema?: Schema | Reference;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
