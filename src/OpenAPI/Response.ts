import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Header} from "./Header";
import {Link} from "./Link";
import {MediaType} from "./MediaType";
import {Reference} from "./Reference";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface ResponseInterface {
    content?: { [_: string]: MediaType; };

    description: string;

    headers?: { [_: string]: string | Header | Reference; };

    links?: { [_: string]: string | Link | Reference; };
}

/**
 * Describes a single response from an API Operation, including design-time, static `links` to operations based on the response.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#response-object
 */
export class Response implements ResponseInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: ResponseInterface) {
        Object.assign(this, properties);
    }

    /**
     * A map containing descriptions of potential response payloads. The key is a media type or [media type range](https://tools.ietf.org/html/rfc7231#appendix-D) and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
     */
    public content?: { [_: string]: MediaType; };

    /**
     * **REQUIRED**. A short description of the response. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description: string;

    /**
     * Maps a header name to its definition. [RFC7230](https://tools.ietf.org/html/rfc7230#page-22) states header names are case insensitive. If a response header is defined with the name `"Content-Type"`, it SHALL be ignored.
     */
    public headers?: { [_: string]: string | Header | Reference; };

    /**
     * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for [Component Objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#componentsObject).
     */
    public links?: { [_: string]: string | Link | Reference; };

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = {} as { [p: string]: any };

        if (this.content !== undefined) {
            result.content = this.content;
        }

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.headers !== undefined) {
            result.headers = this.headers;
        }

        if (this.links !== undefined) {
            result.links = this.links;
        }

        return result;
    }
}
