import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SecurityScheme, SecuritySchemeInterface} from "./SecurityScheme";

export interface OpenIdConnectSecuritySchemeInterface extends SecuritySchemeInterface {
    openIdConnectUrl: string;
}

/**
 * @inheritDoc
 */
export class OpenIdConnectSecurityScheme extends SecurityScheme implements OpenIdConnectSecuritySchemeInterface, SerializableInterface {

    constructor(properties: OpenIdConnectSecuritySchemeInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL.
     */
    public openIdConnectUrl: string;

    /**
     * @inheritDoc
     */
    public readonly type: string = "openIdConnect";

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        if (this.openIdConnectUrl !== undefined) {
            result.openIdConnectUrl = this.openIdConnectUrl;
        }

        return result;
    }
}
