import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SerializerInterface} from "../Serializer/SerializerInterface";

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

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
