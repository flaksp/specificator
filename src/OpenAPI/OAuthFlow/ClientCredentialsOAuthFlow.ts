import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {OAuthFlow, OAuthFlowInterface} from "./OAuthFlow";

export interface ClientCredentialsOAuthFlowInterface extends OAuthFlowInterface {
    tokenUrl: string;
}

/**
 * @inheritDoc
 */
export class ClientCredentialsOAuthFlow extends OAuthFlow implements ClientCredentialsOAuthFlowInterface, SerializableInterface {

    constructor(properties: ClientCredentialsOAuthFlowInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The token URL to be used for this flow. This MUST be in the form of a URL.
     */
    public tokenUrl: string;

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        if (this.tokenUrl !== undefined) {
            result.tokenUrl = this.tokenUrl;
        }

        return result;
    }
}
