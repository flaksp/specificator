import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface ExternalDocumentationInterface {
    description?: string;

    url: string;
}

/**
 * Allows referencing an external resource for extended documentation.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#external-documentation-object
 */
export class ExternalDocumentation implements ExternalDocumentationInterface, SerializableInterface, SafeEditableInterface {
    constructor(properties: ExternalDocumentationInterface) {
        Object.assign(this, properties);
    }

    /**
     * A short description of the target documentation. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * **REQUIRED**. The URL for the target documentation. Value MUST be in the format of a URL.
     */
    public url: string;

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
