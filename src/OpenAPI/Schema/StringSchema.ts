import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {Schema, SchemaInterface} from "./Schema";

export interface StringSchemaInterface extends SchemaInterface {
    default?: string;

    enum?: string[];

    example?: string | null;

    format?: string;

    maxLength?: number;

    minLength?: number;

    pattern?: string;
}

/**
 * @inheritDoc
 */
export class StringSchema extends Schema implements StringSchemaInterface, SerializableInterface {

    constructor(properties: StringSchemaInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * The default value represents what would be assumed by the consumer of the input as the value of the schema if one is not provided. Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level. For example, if `type` is `string`, then `default` can be `"foo"` but cannot be `1`.
     */
    public default?: string;

    public enum?: string[];

    /**
     * A free-form property to include an example of an instance for this schema. To represent examples that cannot be naturally represented in JSON or YAML, a string value can be used to contain the example with escaping where necessary.
     */
    public example?: string | null;

    /**
     * See [Data Type Formats](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#dataTypeFormat) for further details. While relying on JSON Schema's defined formats, the OAS offers a few additional predefined formats.
     */
    public format?: string;

    public maxLength?: number;

    public minLength?: number;

    /**
     * This string SHOULD be a valid regular expression, according to the [ECMA 262 regular expression](https://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5) dialect.
     */
    public pattern?: string;

    /**
     * @inheritDoc
     */
    public readonly type: string = "string";

    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        if (this.default !== undefined) {
            result.default = this.default;
        }

        if (this.enum !== undefined) {
            result.enum = this.enum;
        }

        if (this.example !== undefined) {
            result.example = this.example;
        }

        if (this.format !== undefined) {
            result.format = this.format;
        }

        if (this.maxLength !== undefined) {
            result.maxLength = this.maxLength;
        }

        if (this.minLength !== undefined) {
            result.minLength = this.minLength;
        }

        if (this.pattern !== undefined) {
            result.pattern = this.pattern;
        }

        return result;
    }
}
