import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Components} from "./Components";
import {ExternalDocumentation} from "./ExternalDocumentation";
import {Info} from "./Info";
import {PathsInterface} from "./Paths";
import {SafeEditableInterface} from "./SafeEditableInterface";
import {SecurityRequirementInterface} from "./SecurityRequirement";
import {Server} from "./Server";
import {Tag} from "./Tag";

export interface OpenAPIInterface {
    components?: Components;

    externalDocs?: ExternalDocumentation;

    info: Info;

    paths: PathsInterface;

    security?: SecurityRequirementInterface[];

    servers?: Server[];

    tags?: Tag[];
}

/**
 * This is the root document object of the [OpenAPI document](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oasDocument).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#openapi-object
 */
export class OpenAPI implements OpenAPIInterface, SerializableInterface, SafeEditableInterface {

    constructor(properties: OpenAPIInterface) {
        Object.assign(this, properties);
    }

    /**
     * An element to hold various schemas for the specification.
     */
    public components?: Components;

    /**
     * Additional external documentation.
     */
    public externalDocs?: ExternalDocumentation;

    /**
     * **REQUIRED**. Provides metadata about the API. The metadata MAY be used by tooling as required.
     */
    public info: Info;

    /**
     * **REQUIRED**. This string MUST be the [semantic version number](https://semver.org/spec/v2.0.0.html) of the [OpenAPI Specification version](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#versions) that the OpenAPI document uses. The `openapi` field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is _not_ related to the API [`info.version`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#infoVersion) string.
     */
    public readonly openapi: string = "3.0.2";

    /**
     * **REQUIRED**. The available paths and operations for the API.
     */
    public paths: PathsInterface;

    /**
     * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition.
     */
    public security?: SecurityRequirementInterface[];

    /**
     * An array of Server Objects, which provide connectivity information to a target server. If the `servers` property is not provided, or is an empty array, the default value would be a [Server Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#serverObject) with a [url](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#serverUrl) value of `/`.
     */
    public servers?: Server[];

    /**
     * A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the [Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject) must be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name in the list MUST be unique.
     */
    public tags?: Tag[];

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    public serialize(): { [p: string]: any } {
        return this;
    }
}
