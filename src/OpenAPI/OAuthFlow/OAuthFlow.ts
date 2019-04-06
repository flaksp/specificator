import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SerializerInterface} from "../../Serializer/SerializerInterface";

export interface OAuthFlowInterface {
    refreshUrl?: string;

    scopes: { [scopeName: string]: string };
}

/**
 * Configuration details for a supported OAuth Flow.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauth-flow-object
 */
export abstract class OAuthFlow implements OAuthFlowInterface, SerializableInterface {
    protected constructor(properties: OAuthFlowInterface) {
        Object.assign(this, properties);
    }

    /**
     * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
     */
    public refreshUrl?: string;

    /**
     * **REQUIRED**. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.
     */
    public scopes: { [scopeName: string]: string };

    public abstract serialize(serializer: SerializerInterface): { [p: string]: any };
}
