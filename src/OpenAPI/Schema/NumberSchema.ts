import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {Schema, SchemaInterface} from "./Schema";

export interface NumberSchemaInterface extends SchemaInterface {
    default?: number;

    example?: number | null;

    exclusiveMaximum?: number;

    exclusiveMinimum?: number;

    format?: string;

    maximum?: number;

    minimum?: number;

    multipleOf?: number;
}

/**
 * @inheritDoc
 */
export class NumberSchema extends Schema implements NumberSchemaInterface, SerializableInterface {

    constructor(properties: NumberSchemaInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * The default value represents what would be assumed by the consumer of the input as the value of the schema if one is not provided. Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level. For example, if `type` is `string`, then `default` can be `"foo"` but cannot be `1`.
     */
    public default?: number;

    /**
     * A free-form property to include an example of an instance for this schema. To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
     */
    public example?: number | null;

    public exclusiveMaximum?: number;

    public exclusiveMinimum?: number;

    /**
     * See [Data Type Formats](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#dataTypeFormat) for further details. While relying on JSON Schema's defined formats, the OAS offers a few additional predefined formats.
     */
    public format?: string;

    public maximum?: number;

    public minimum?: number;

    public multipleOf?: number;

    /**
     * @inheritDoc
     */
    public readonly type: string = "number";

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        if (this.default !== undefined) {
            result.default = this.default;
        }

        if (this.example !== undefined) {
            result.example = this.example;
        }

        if (this.exclusiveMaximum !== undefined) {
            result.exclusiveMaximum = this.exclusiveMaximum;
        }

        if (this.exclusiveMinimum !== undefined) {
            result.exclusiveMinimum = this.exclusiveMinimum;
        }

        if (this.format !== undefined) {
            result.format = this.format;
        }

        if (this.maximum !== undefined) {
            result.maximum = this.maximum;
        }

        if (this.minimum !== undefined) {
            result.minimum = this.minimum;
        }

        if (this.multipleOf !== undefined) {
            result.multipleOf = this.multipleOf;
        }

        return result;
    }
}
