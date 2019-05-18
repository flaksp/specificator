import {SerializableInterface} from "../Serializer/SerializableInterface";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface LicenseInterface {
    name: string;

    url?: string;
}

/**
 * License information for the exposed API.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#license-object
 */
export class License implements LicenseInterface, SerializableInterface, SafeEditableInterface {
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

        if (this.name !== undefined) {
            result.name = this.name;
        }

        if (this.url !== undefined) {
            result.url = this.url;
        }

        return result;
    }
}
