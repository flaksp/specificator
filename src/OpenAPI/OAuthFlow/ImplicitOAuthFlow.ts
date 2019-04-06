import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SerializerInterface} from "../../Serializer/SerializerInterface";
import {OAuthFlow, OAuthFlowInterface} from "./OAuthFlow";

export interface ImplicitOAuthFlowInterface extends OAuthFlowInterface {
    authorizationUrl: string;
}

/**
 * @inheritDoc
 */
export class ImplicitOAuthFlow extends OAuthFlow implements ImplicitOAuthFlowInterface, SerializableInterface {
    constructor(properties: ImplicitOAuthFlowInterface) {
        super(properties);

        Object.assign(this, properties);
    }

    /**
     * **REQUIRED**. The authorization URL to be used for this flow. This MUST be in the form of a URL.
     */
    public authorizationUrl: string;

    public serialize(serializer: SerializerInterface): { [p: string]: any } {
        return serializer.serialize(this);
    }
}
