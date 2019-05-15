import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {ExternalDocumentation} from "../ExternalDocumentation";
import {Reference} from "../Reference";
import {SafeEditableInterface} from "../SafeEditableInterface";

export interface SchemaInterface {
    anyOf?: Array<Schema|Reference>;

    deprecated?: boolean;

    description?: string;

    externalDocs?: ExternalDocumentation;

    not?: Array<Schema|Reference>;

    nullable?: boolean;

    oneOf?: Array<Schema|Reference>;

    readOnly?: boolean;

    title?: string;

    writeOnly?: boolean;
}

/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is an extended subset of the [JSON Schema Specification Wright Draft 00](http://json-schema.org/).
 *
 * For more information about the properties, see [JSON Schema Core](https://tools.ietf.org/html/draft-wright-json-schema-00) and [JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00). Unless stated otherwise, the property definitions follow the JSON Schema.
 *
 * The following properties are taken directly from the JSON Schema definition and follow the same specifications:
 *
 * * title
 * * multipleOf
 * * maximum
 * * exclusiveMaximum
 * * minimum
 * * exclusiveMinimum
 * * maxLength
 * * minLength
 * * pattern (This string SHOULD be a valid regular expression, according to the [ECMA 262 regular expression](https://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5) dialect)
 * * maxItems
 * * minItems
 * * uniqueItems
 * * maxProperties
 * * minProperties
 * * required
 * * enum
 *
 * The following properties are taken from the JSON Schema definition but their definitions were adjusted to the OpenAPI Specification.
 *
 * * type - Value MUST be a string. Multiple types via an array are not supported.
 * * allOf - Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema.
 * * oneOf - Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema.
 * * anyOf - Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema.
 * * not - Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema.
 * * items - Value MUST be an object and not an array. Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema. `items` MUST be present if the `type` is `array`.
 * * properties - Property definitions MUST be a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema (inline or referenced).
 * * additionalProperties - Value can be boolean or object. Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema. Consistent with JSON Schema, `additionalProperties` defaults to `true`.
 * * description - [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
 * * format - See [Data Type Formats](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#dataTypeFormat) for further details. While relying on JSON Schema's defined formats, the OAS offers a few additional predefined formats.
 * * default - The default value represents what would be assumed by the consumer of the input as the value of the schema if one is not provided. Unlike JSON Schema, the value MUST conform to the defined type for the Schema Object defined at the same level. For example, if `type` is `string`, then `default` can be `"foo"` but cannot be `1`.
 *
 * Alternatively, any time a Schema Object can be used, a [Reference Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#referenceObject) can be used in its place. This allows referencing definitions instead of defining them inline.
 *
 * Additional properties defined by the JSON Schema specification that are not mentioned here are strictly unsupported.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject
 */
export abstract class Schema implements SchemaInterface, SerializableInterface, SafeEditableInterface {
    protected constructor(properties: SchemaInterface) {
        Object.assign(this, properties);
    }

    /**
     * Inline or referenced schema MUST be of a [Schema Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#schemaObject) and not a standard JSON Schema.
     */
    public anyOf?: Array<Schema|Reference>;

    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is `false`.
     */
    public deprecated?: boolean;

    /**
     * [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * Additional external documentation for this schema.
     */
    public externalDocs?: ExternalDocumentation;

    public not?: Array<Schema|Reference>;

    public nullable?: boolean;

    public oneOf?: Array<Schema|Reference>;

    /**
     * Relevant only for Schema `"properties"` definitions. Declares the property as "read only". This means that it MAY be sent as part of a response but SHOULD NOT be sent as part of the request. If the property is marked as `readOnly` being `true` and is in the `required` list, the `required` will take effect on the response only. A property MUST NOT be marked as both `readOnly` and `writeOnly` being `true`. Default value is `false`.
     */
    public readOnly?: boolean;

    public title?: string;

    /**
     * Value MUST be a string. Multiple types via an array are not supported.
     */
    public type: string;

    /**
     * Relevant only for Schema `"properties"` definitions. Declares the property as "write only". Therefore, it MAY be sent as part of a request but SHOULD NOT be sent as part of the response. If the property is marked as `writeOnly` being `true` and is in the `required` list, the `required` will take effect on the request only. A property MUST NOT be marked as both `readOnly` and `writeOnly` being `true`. Default value is `false`.
     */
    public writeOnly?: boolean;

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

        if (this.anyOf !== undefined) {
            result.anyOf = this.anyOf;
        }

        if (this.deprecated !== undefined) {
            result.deprecated = this.deprecated;
        }

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.externalDocs !== undefined) {
            result.externalDocs = this.externalDocs;
        }

        if (this.not !== undefined) {
            result.not = this.not;
        }

        if (this.nullable !== undefined) {
            result.nullable = this.nullable;
        }

        if (this.oneOf !== undefined) {
            result.oneOf = this.oneOf;
        }

        if (this.title !== undefined) {
            result.title = this.title;
        }

        if (this.type !== undefined) {
            result.type = this.type;
        }

        if (this.writeOnly !== undefined) {
            result.writeOnly = this.writeOnly;
        }

        return result;
    }
}
