import {SerializableInterface} from "../Serializer/SerializableInterface";
import {CallbackInterface} from "./Callback";
import {ExternalDocumentation} from "./ExternalDocumentation";
import {Parameter} from "./Parameter/Parameter";
import {Reference} from "./Reference";
import {RequestBody} from "./RequestBody";
import {ResponsesInterface} from "./Responses";
import {SafeEditableInterface} from "./SafeEditableInterface";
import {SecurityRequirementInterface} from "./SecurityRequirement";
import {Server} from "./Server";

export interface OperationInterface {
    callbacks?: { [_: string]: string | CallbackInterface | Reference; };

    deprecated?: boolean;

    description?: string;

    externalDocs?: ExternalDocumentation;

    operationId?: string;

    parameters?: Array<Parameter | Reference>;

    requestBody?: RequestBody | Reference;

    responses: ResponsesInterface;

    security?: SecurityRequirementInterface[];

    servers?: Server[];

    summary?: string;

    tags?: string[];
}

/**
 * Describes a single API operation on a path.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operation-object
 */
export class Operation implements OperationInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: OperationInterface) {
        Object.assign(this, properties);
    }

    /**
     * A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a [Callback Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#callbackObject) that describes a request that may be initiated by the API provider and the expected responses. The key value used to identify the callback object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
     */
    public callbacks?: { [_: string]: string | CallbackInterface | Reference; };

    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is `false`.
     */
    public deprecated?: boolean;

    /**
     * A verbose explanation of the operation behavior. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * Additional external documentation for this operation.
     */
    public externalDocs?: ExternalDocumentation;

    /**
     * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is **case-sensitive**. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
     */
    public operationId?: string;

    /**
     * A list of parameters that are applicable for this operation. If a parameter is already defined at the [Path Item](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#pathItemParameters), the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a [name](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterName) and [location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn). The list can use the [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#referenceObject) to link to parameters that are defined at the [OpenAPI Object's components/parameters](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsParameters).
     */
    public parameters?: Array<Parameter | Reference>;

    /**
     * The request body applicable for this operation. The `requestBody` is only supported in HTTP methods where the HTTP 1.1 specification [RFC7231](https://tools.ietf.org/html/rfc7231#section-4.3.1) has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague, `requestBody` SHALL be ignored by consumers.
     */
    public requestBody?: RequestBody | Reference;

    /**
     * **REQUIRED**. The list of possible responses as they are returned from executing this operation.
     */
    public responses: ResponsesInterface;

    /**
     * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. This definition overrides any declared top-level security. To remove a top-level [`security`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oasSecurity) declaration, an empty array can be used.
     */
    public security?: SecurityRequirementInterface[];

    /**
     * An alternative `server` array to service this operation. If an alternative `server` object is specified at the Path Item Object or Root level, it will be overridden by this value.
     */
    public servers?: Server[];

    /**
     * A short summary of what the operation does.
     */
    public summary?: string;

    /**
     * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
     */
    public tags?: string[];

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    public serialize(): { [p: string]: any } {
        const result = {} as { [p: string]: any };

        if (this.callbacks !== undefined) {
            result.callbacks = this.callbacks;
        }

        if (this.deprecated !== undefined) {
            result.deprecated = this.deprecated;
        }

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.externalDocs !== undefined) {
            result.externalDocs = this.externalDocs;
        }

        if (this.operationId !== undefined) {
            result.operationId = this.operationId;
        }

        if (this.parameters !== undefined) {
            result.parameters = this.parameters;
        }

        if (this.requestBody !== undefined) {
            result.requestBody = this.requestBody;
        }

        if (this.responses !== undefined) {
            result.responses = this.responses;
        }

        if (this.security !== undefined) {
            result.security = this.security;
        }

        if (this.servers !== undefined) {
            result.servers = this.servers;
        }

        if (this.summary !== undefined) {
            result.summary = this.summary;
        }

        if (this.tags !== undefined) {
            result.tags = this.tags;
        }

        return result;
    }
}
