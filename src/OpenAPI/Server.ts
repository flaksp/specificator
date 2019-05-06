import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";
import {ServerVariable} from "./ServerVariable";

export interface ServerInterface {
    description?: string;

    url: string;

    variables?: { [_: string]: ServerVariable; };
}

/**
 * An object representing a Server.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#server-object
 */
export class Server implements ServerInterface, SerializableInterface, SafeEditableInterface {
    constructor(properties: ServerInterface) {
        Object.assign(this, properties);
    }

    /**
     * An optional string describing the host designated by the URL. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * **REQUIRED**. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in `{`brackets`}`.
     */
    public url: string;

    /**
     * A map between a variable name and its value. The value is used for substitution in the server's URL template.
     */
    public variables?: { [_: string]: ServerVariable; };

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
