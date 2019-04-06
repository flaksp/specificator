import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Server} from "./Server";

export interface LinkInterface {
    description?: string;

    operationId?: string;

    operationRef?: string;

    parameters?: { [_: string]: string | any; };

    requestBody?: string | any;

    server?: Server;
}

/**
 * The `Link object` represents a possible design-time link for a response. The presence of a link does not guarantee the caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * Unlike _dynamic_ links (i.e. links provided **in** the response payload), the OAS linking mechanism does not require link information in the runtime response.
 *
 * For computing links, and providing instructions to execute them, a [runtime expression](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#runtimeExpression) is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#link-object
 */
export class Link implements LinkInterface, SerializableInterface {
    constructor(properties: LinkInterface) {
        Object.assign(this, properties);
    }

    /**
     * A description of the link. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * The name of an _existing_, resolvable OAS operation, as defined with a unique `operationId`. This field is mutually exclusive of the `operationRef` field.
     */
    public operationId?: string;

    /**
     * A relative or absolute reference to an OAS operation. This field is mutually exclusive of the `operationId` field, and MUST point to an [Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject). Relative `operationRef` values MAY be used to locate an existing [Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject) in the OpenAPI definition.
     */
    public operationRef?: string;

    /**
     * A map representing parameters to pass to an operation as specified with `operationId` or identified via `operationRef`. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the [parameter location](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterIn) `[{in}.]{name}` for operations that use the same parameter name in different locations (e.g. path.id).
     */
    public parameters?: { [_: string]: string | any; };

    /**
     * A literal value or [{expression}](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#runtimeExpression) to use as a request body when calling the target operation.
     */
    public requestBody?: string | any;

    /**
     * A server object to be used by the target operation.
     */
    public server?: Server;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
