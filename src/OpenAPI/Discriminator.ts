import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface DiscriminatorInterface {
    mapping?: { [discriminatorValue: string]: string; };

    propertyName: string;
}

/**
 * When request bodies or response payloads may be one of a number of different schemas, a `discriminator` object can be used to aid in serialization, deserialization, and validation. The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it.
 *
 * When using the discriminator, _inline_ schemas will not be considered.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#discriminator-object
 */
export class Discriminator implements DiscriminatorInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: DiscriminatorInterface) {
        Object.assign(this, properties);
    }

    /**
     * An object to hold mappings between payload values and schema names or references.
     */
    public mapping?: { [discriminatorValue: string]: string; };

    /**
     * **REQUIRED**. The name of the property in the payload that will hold the discriminator value.
     */
    public propertyName: string;

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

        if (this.mapping !== undefined) {
            result.mapping = this.mapping;
        }

        if (this.propertyName !== undefined) {
            result.propertyName = this.propertyName;
        }

        return result;
    }
}
