import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Example} from "./Example";
import {MediaType} from "./MediaType";
import {Reference} from "./Reference";
import {Schema} from "./Schema/Schema";

export interface HeaderInterface {
    content?: { [contentType: string]: string | MediaType; };

    deprecated: boolean;

    description?: string;

    example?: any;

    examples?: { [exampleName: string]: string | Example | Reference; };

    required: boolean;

    schema?: Schema | Reference;
}

/**
 * The Header Object follows the structure of the [Parameter Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterObject) with the following changes:
 *
 * 1. `name` MUST NOT be specified, it is given in the corresponding `headers` map.
 * 2. `in` MUST NOT be specified, it is implicitly in `header`.
 * 3. All traits that are affected by the location MUST be applicable to a location of `header` (for example, [`style`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterStyle)).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#headerObject
 */
export class Header implements HeaderInterface, SerializableInterface {
    constructor(properties: HeaderInterface) {
        Object.assign(this, properties);
    }

    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.
     */
    public content?: { [contentType: string]: string | MediaType; };

    /**
     * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`.
     */
    public deprecated: boolean;

    /**
     * A brief description of the parameter. This could contain examples of use. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * Example of the media type. The example SHOULD match the specified schema and encoding properties if present. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` which contains an example, the `example` value SHALL _override_ the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
     */
    public example?: any;

    /**
     * Examples of the media type. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` which contains an example, the examples value SHALL _override_ the example provided by the schema.
     */
    public examples?: { [exampleName: string]: string | Example | Reference; };

    /**
     * Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) is "path", this property is **REQUIRED** and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.
     */
    public required: boolean;

    /**
     * The schema defining the type used for the parameter.
     */
    public schema?: Schema | Reference;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
