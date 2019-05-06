import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SafeEditableInterface} from "../SafeEditableInterface";

export interface SecuritySchemeInterface {
    description?: string;
}

/**
 * Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2's common flows (implicit, password, application and access code) as defined in [RFC6749](https://tools.ietf.org/html/rfc6749), and [OpenID Connect Discovery](https://tools.ietf.org/html/draft-ietf-oauth-discovery-06).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#security-scheme-object
 */
export abstract class SecurityScheme implements SecuritySchemeInterface, SerializableInterface, SafeEditableInterface {
    protected constructor(properties: SecuritySchemeInterface) {
        Object.assign(this, properties);
    }

    /**
     * A short description for security scheme. [CommonMark syntax](http://spec.commonmark.org/) MAY be used for rich text representation.
     */
    public description?: string;

    /**
     * **REQUIRED**. The type of the security scheme. Valid values are `"apiKey"`, `"http"`, `"oauth2"`, `"openIdConnect"`.
     */
    public abstract type: string;

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    public abstract serialize(): { [p: string]: any };
}
