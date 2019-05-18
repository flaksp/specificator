import {SerializableInterface} from "../Serializer/SerializableInterface";
import {Header} from "./Header";
import {Reference} from "./Reference";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface EncodingInterface {
    allowReserved: boolean;

    contentType?: string;

    headers?: { [_: string]: string | Header | Reference; };
}

/**
 * A single encoding definition applied to a single schema property.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#encoding-object
 */
export class Encoding implements EncodingInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: EncodingInterface) {
        Object.assign(this, properties);
    }

    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-2.2) `:/?#[]@!$&'()*+,;=` to be included without percent-encoding. The default value is `false`. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded`.
     */
    public allowReserved: boolean;

    /**
     * The Content-Type for encoding a specific property. Default value depends on the property type: for `string` with `format` being `binary` – `application/octet-stream`; for other primitive types – `text/plain`; for `object` - `application/json`; for `array` – the default is defined based on the inner type. The value can be a specific media type (e.g. `application/json`), a wildcard media type (e.g. `image/*`), or a comma-separated list of the two types.
     */
    public contentType?: string;

    /**
     * A map allowing additional information to be provided as headers, for example `Content-Disposition`. `Content-Type` is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a `multipart`.
     */
    public headers?: { [_: string]: string | Header | Reference; };

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

        if (this.allowReserved !== undefined) {
            result.allowReserved = this.allowReserved;
        }

        if (this.contentType !== undefined) {
            result.contentType = this.contentType;
        }

        if (this.headers !== undefined) {
            result.headers = this.headers;
        }

        return result;
    }
}
