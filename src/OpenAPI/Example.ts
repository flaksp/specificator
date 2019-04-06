import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SerializerInterface} from "../Serializer/SerializerInterface";

export interface ExampleInterface {
    description?: string;

    externalValue?: string;

    summary?: string;

    value?: any;
}

/**
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#exampleObject
 */
export class Example implements ExampleInterface, SerializableInterface {
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

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
