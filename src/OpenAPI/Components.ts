import {SerializableInterface} from "../Serializer/SerializableInterface";
import {CallbackInterface} from "./Callback";
import {Example} from "./Example";
import {Header} from "./Header";
import {Link} from "./Link";
import {Parameter} from "./Parameter/Parameter";
import {RequestBody} from "./RequestBody";
import {Response} from "./Response";
import {SafeEditableInterface} from "./SafeEditableInterface";
import {Schema} from "./Schema/Schema";
import {SecurityScheme} from "./SecurityScheme/SecurityScheme";

export interface ComponentsInterface {
    callbacks?: { [_: string]: CallbackInterface; };

    examples?: { [_: string]: Example; };

    headers?: { [_: string]: Header; };

    links?: { [_: string]: Link; };

    parameters?: { [_: string]: Parameter; };

    requestBodies?: { [_: string]: RequestBody; };

    responses?: { [_: string]: Response; };

    schemas?: { [_: string]: Schema; };

    securitySchemes?: { [_: string]: SecurityScheme; };
}

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#components-object
 */
export class Components implements ComponentsInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: ComponentsInterface) {
        Object.assign(this, properties);
    }

    /**
     * An object to hold reusable [Callback Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#callbackObject).
     */
    public callbacks?: { [p: string]: CallbackInterface };

    /**
     * An object to hold reusable [Example Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#exampleObject).
     */
    public examples?: { [p: string]: Example };

    /**
     * An object to hold reusable [Header Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#headerObject).
     */
    public headers?: { [p: string]: Header };

    /**
     * An object to hold reusable [Link Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#linkObject).
     */
    public links?: { [p: string]: Link };

    /**
     * An object to hold reusable [Parameter Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#parameterObject).
     */
    public parameters?: { [p: string]: Parameter };

    /**
     * An object to hold reusable [Request Body Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#requestBodyObject).
     */
    public requestBodies?: { [p: string]: RequestBody };

    /**
     * An object to hold reusable [Response Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#responseObject).
     */
    public responses?: { [p: string]: Response };

    /**
     * An object to hold reusable [Schema Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject).
     */
    public schemas?: { [p: string]: Schema };

    /**
     * An object to hold reusable [Security Scheme Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#securitySchemeObject).
     */
    public securitySchemes?: { [p: string]: SecurityScheme };

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

        if (this.examples !== undefined) {
            result.examples = this.examples;
        }

        if (this.headers !== undefined) {
            result.headers = this.headers;
        }

        if (this.links !== undefined) {
            result.links = this.links;
        }

        if (this.parameters !== undefined) {
            result.parameters = this.parameters;
        }

        if (this.requestBodies !== undefined) {
            result.requestBodies = this.requestBodies;
        }

        if (this.responses !== undefined) {
            result.responses = this.responses;
        }

        if (this.schemas !== undefined) {
            result.schemas = this.schemas;
        }

        if (this.securitySchemes !== undefined) {
            result.securitySchemes = this.securitySchemes;
        }

        return result;
    }
}
