import {SerializableInterface} from "../Serializer/Serializer";

export interface LicenseInterface {
    name: string;

    url?: string;
}

/**
 * License information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#license-object
 */
export class License implements LicenseInterface, SerializableInterface {
    public constructor(properties: LicenseInterface) {
        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The license name used for the API.
     */
    public name: string;

    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     */
    public url?: string;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
