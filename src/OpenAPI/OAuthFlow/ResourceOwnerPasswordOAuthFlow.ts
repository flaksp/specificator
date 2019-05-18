import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {OAuthFlow, OAuthFlowInterface} from "./OAuthFlow";

export interface ResourceOwnerPasswordOAuthFlowInterface extends OAuthFlowInterface {
    tokenUrl: string;
}

/**
 * @inheritDoc
 */
export class ResourceOwnerPasswordOAuthFlow extends OAuthFlow implements ResourceOwnerPasswordOAuthFlowInterface, SerializableInterface {

    constructor(properties: ResourceOwnerPasswordOAuthFlowInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The token URL to be used for this flow. This MUST be in the form of a URL.
     */
    public tokenUrl: string;

    public serialize(): { [p: string]: any } {
        const result = super.serialize();

        if (this.tokenUrl !== undefined) {
            result.tokenUrl = this.tokenUrl;
        }

        return result;
    }
}
