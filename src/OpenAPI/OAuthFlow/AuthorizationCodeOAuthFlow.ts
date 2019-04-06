import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {OAuthFlow, OAuthFlowInterface} from "./OAuthFlow";

export interface AuthorizationCodeOAuthFlowInterface extends OAuthFlowInterface {
    authorizationUrl: string;

    tokenUrl: string;
}

/**
 * @inheritDoc
 */
export class AuthorizationCodeOAuthFlow extends OAuthFlow implements AuthorizationCodeOAuthFlowInterface, SerializableInterface {

    constructor(properties: AuthorizationCodeOAuthFlowInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The authorization URL to be used for this flow. This MUST be in the form of a URL.
     */
    public authorizationUrl: string;

    /**
     * **REQUIRED**. The token URL to be used for this flow. This MUST be in the form of a URL.
     */
    public tokenUrl: string;

    public serialize(): { [p: string]: any } {
        return this;
    }
}
