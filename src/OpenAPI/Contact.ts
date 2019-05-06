import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface ContactInterface {
    email?: string;

    name?: string;

    url?: string;
}

/**
 * Contact information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#contact-object
 */
export class Contact implements ContactInterface, SerializableInterface, SafeEditableInterface {
    constructor(properties: ContactInterface) {
        Object.assign(this, properties);
    }

    /**
     * The email address of the contact person/organization. MUST be in the format of an email address.
     */
    public email?: string;

    /**
     * The identifying name of the contact person/organization.
     */
    public name?: string;

    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     */
    public url?: string;

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
