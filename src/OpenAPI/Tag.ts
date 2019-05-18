import {SerializableInterface} from "../Serializer/SerializableInterface";
import {ExternalDocumentation} from "./ExternalDocumentation";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface TagInterface {
    description?: string;

    externalDocs?: ExternalDocumentation;

    name: string;
}

/**
 * Adds metadata to a single tag that is used by the [Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#operationObject). It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#tag-object
 */
export class Tag implements TagInterface, SerializableInterface, SafeEditableInterface {
    constructor(properties: TagInterface) {
        Object.assign(this, properties);
    }

    /**
     * A short description for the tag. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * Additional external documentation for this tag.
     */
    public externalDocs?: ExternalDocumentation;

    /**
     * **REQUIRED**. The name of the tag.
     */
    public name: string;

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

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.externalDocs !== undefined) {
            result.externalDocs = this.externalDocs;
        }

        if (this.name !== undefined) {
            result.name = this.name;
        }

        return result;
    }
}
