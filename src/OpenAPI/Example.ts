import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface ExampleInterface {
    description?: string;

    externalValue?: string;

    summary?: string;

    value?: any;
}

/**
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#exampleObject
 */
export class Example implements ExampleInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: ExampleInterface) {
        Object.assign(this, properties);
    }

    /**
     * Long description for the example. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * A URL that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The `value` field and `externalValue` field are mutually exclusive.
     */
    public externalValue?: string;

    /**
     * Short description for the example.
     */
    public summary?: string;

    /**
     * Embedded literal example. The `value` field and `externalValue` field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.
     */
    public value?: any;

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

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.externalValue !== undefined) {
            result.externalValue = this.externalValue;
        }

        if (this.summary !== undefined) {
            result.summary = this.summary;
        }

        if (this.value !== undefined) {
            result.value = this.value;
        }

        return result;
    }
}
