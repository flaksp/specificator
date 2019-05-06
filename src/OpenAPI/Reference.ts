import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface ReferenceInterface {
    $ref: string;
}

/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 *
 * The Reference Object is defined by [JSON Reference](https://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03) and follows the same structure, behavior and rules.
 *
 * For this specification, reference resolution is accomplished as defined by the JSON Reference specification and not by the JSON Schema specification.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#reference-object
 */
export class Reference implements ReferenceInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: ReferenceInterface) {
        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The reference string.
     */
    public $ref: string;

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
