import {SerializableInterface} from "../../Serializer/SerializableInterface";
import {SafeEditableInterface} from "../SafeEditableInterface";

export interface OAuthFlowInterface {
    refreshUrl?: string;

    scopes: { [scopeName: string]: string };
}

/**
 * Configuration details for a supported OAuth Flow.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauth-flow-object
 */
export abstract class OAuthFlow implements OAuthFlowInterface, SerializableInterface, SafeEditableInterface {
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

    /**
     * @inheritDoc
     */
    public cloneAndEdit<T>(callback: (object: T) => void): T {
        const copy = require("deepcopy")(this);

        callback(copy);

        return copy;
    }

    /**
     * @inheritDoc
     */
    public serialize(): { [p: string]: any } {
        const result = {} as { [p: string]: any };

        if (this.refreshUrl !== undefined) {
            result.refreshUrl = this.refreshUrl;
        }

        if (this.scopes !== undefined) {
            result.scopes = this.scopes;
        }

        return result;
    }
}
