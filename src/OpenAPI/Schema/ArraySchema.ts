import {SerializableInterface} from "../../Serializer/Serializer";
import {Reference} from "../Reference";
import {Schema, SchemaInterface} from "./Schema";

export interface ArraySchemaInterface extends SchemaInterface {
    items: Schema | Reference;

    maxItems?: number;

    minItems?: number;

    uniqueItems?: boolean;
}

/**
 * @inheritDoc
 */
export class ArraySchema extends Schema implements ArraySchemaInterface, SerializableInterface {

    constructor(properties: ArraySchemaInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * Value MUST be an object and not an array. Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema. `items` MUST be present if the `type` is `array`.
     */
    public items: Schema | Reference;

    public maxItems?: number;

    public minItems?: number;

    /**
     * @inheritDoc
     */
    public readonly type: string = "array";

    public uniqueItems?: boolean;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
