import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Contact} from "./Contact";
import {License} from "./License";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface InfoInterface {
    contact?: Contact;

    description?: string;

    license?: License;

    termsOfService?: string;

    title: string;

    version: string;
}

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#info-object
 */
export class Info implements InfoInterface, SerializableInterface, SafeEditableInterface {
    constructor(properties: InfoInterface) {
        Object.assign(this, properties);
    }

    /**
     * The contact information for the exposed API.
     */
    public contact?: Contact;

    /**
     * A short description of the application. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * The license information for the exposed API.
     */
    public license?: License;

    /**
     *  URL to the Terms of Service for the API. MUST be in the format of a URL.
     */
    public termsOfService?: string;

    /**
     * **REQUIRED**. The title of the application.
     */
    public title: string;

    /**
     * **REQUIRED**. The version of the OpenAPI document (which is distinct from the [OpenAPI Specification version](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oasVersion) or the API implementation version).
     */
    public version: string;

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

        if (this.contact !== undefined) {
            result.contact = this.contact;
        }

        if (this.description !== undefined) {
            result.description = this.description;
        }

        if (this.license !== undefined) {
            result.license = this.license;
        }

        if (this.termsOfService !== undefined) {
            result.termsOfService = this.termsOfService;
        }

        if (this.title !== undefined) {
            result.title = this.title;
        }

        if (this.version !== undefined) {
            result.version = this.version;
        }

        return result;
    }
}
