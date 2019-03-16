import {SerializableInterface} from "../../Serializer/Serializer";
import {Schema, SchemaInterface} from "./Schema";

export interface BooleanSchemaInterface extends SchemaInterface {
    default?: boolean;

    example?: boolean | null;
}

/**
 * @inheritDoc
 */
export class BooleanSchema extends Schema implements BooleanSchemaInterface, SerializableInterface {

    constructor(properties: BooleanSchemaInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * The default value represents what would be assumed by the consumer of the input as the value of the schema if one is not provided. Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level. For example, if `type` is `string`, then `default` can be `"foo"` but cannot be `1`.
     */
    public default?: boolean;

    /**
     * A free-form property to include an example of an instance for this schema. To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
     */
    public example?: boolean | null;

    /**
     * @inheritDoc
     */
    public readonly type: string = "boolean";

    public serialize(): { [p: string]: any } {
        return this;
    }
}
