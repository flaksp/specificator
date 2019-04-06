import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {Example} from "../Example";
import {MediaType} from "../MediaType";
import {Reference} from "../Reference";
import {Schema} from "../Schema/Schema";

export interface ParameterInterface {
    content?: { [contentType: string]: string | MediaType; };

    deprecated?: boolean;

    description?: string;

    example?: any;

    examples?: { [exampleName: string]: string | Example | Reference; };

    name: string;

    schema?: Schema | Reference;
}

/**
 * Describes a single operation parameter.
 *
 * A unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterName) and [location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn).
 *
 * There are four possible parameter locations specified by the `in` field:
 * * path - Used together with [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating), where the parameter value is actually part of the operation's URL. This does not include the host or base path of the API. For example, in `/items/{itemId}`, the path parameter is `itemId`.
 * * query - Parameters that are appended to the URL. For example, in `/items?id=###`, the query parameter is `id`.
 * * header - Custom headers that are expected as part of the request. Note that [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive.
 * * cookie - Used to pass a specific cookie value to the API.
 *
 * For more complex scenarios, the [`content`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterContent) property can define the media type and schema of the parameter. A parameter MUST contain either a `schema` property, or a `content` property, but not both. When `example` or `examples` are provided in conjunction with the `schema` object, the example MUST follow the prescribed serialization strategy for the parameter.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameter-object
 */
export abstract class Parameter implements ParameterInterface, SerializableInterface {
    protected constructor(properties: ParameterInterface) {
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
     * **REQUIRED**. The location of the parameter. Possible values are "query", "header", "path" or "cookie".
     */
    public abstract in: string;

    /**
     * **REQUIRED**. The name of the parameter. Parameter names are case sensitive.
     *
     * * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) is `"path"`,the `name` field MUST correspond to the associated path segment from the [path](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsPath) field in the [Paths Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathsObject). See [Path Templating](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathTemplating) for further information.
     * * If [`in`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) is `"header"` and the name field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.
     * * For all other cases, the `name` corresponds to the parameter name used by the [`in`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) property.
     */
    public name: string;

    /**
     * Determines whether this parameter is mandatory. If the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) is "path", this property is **REQUIRED** and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.
     */
    public required: boolean;

    /**
     * The schema defining the type used for the parameter.
     */
    public schema?: Schema | Reference;

    public abstract serialize(): { [p: string]: any };
}
