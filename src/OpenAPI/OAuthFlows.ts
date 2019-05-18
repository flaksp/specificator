import {SerializableInterface} from "../Serializer/SerializableInterface";
import {AuthorizationCodeOAuthFlow} from "./OAuthFlow/AuthorizationCodeOAuthFlow";
import {ClientCredentialsOAuthFlow} from "./OAuthFlow/ClientCredentialsOAuthFlow";
import {ImplicitOAuthFlow} from "./OAuthFlow/ImplicitOAuthFlow";
import {ResourceOwnerPasswordOAuthFlow} from "./OAuthFlow/ResourceOwnerPasswordOAuthFlow";
import {SafeEditableInterface} from "./SafeEditableInterface";

export interface OAuthFlowsInterface {
    authorizationCode?: AuthorizationCodeOAuthFlow;

    clientCredentials?: ClientCredentialsOAuthFlow;

    implicit?: ImplicitOAuthFlow;

    password?: ResourceOwnerPasswordOAuthFlow;
}

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#oauth-flows-object
 */
export class OAuthFlows implements OAuthFlowsInterface, SerializableInterface, SafeEditableInterface {
    public constructor(properties: OAuthFlowsInterface) {
        Object.assign(this, properties);
    }

    /**
     * Configuration for the OAuth Authorization Code flow. Previously called `accessCode` in OpenAPI 2.0.
     */
    public authorizationCode?: AuthorizationCodeOAuthFlow;

    /**
     * Configuration for the OAuth Client Credentials flow. Previously called `application` in OpenAPI 2.0.
     */
    public clientCredentials?: ClientCredentialsOAuthFlow;

    /**
     * Configuration for the OAuth Implicit flow.
     */
    public implicit?: ImplicitOAuthFlow;

    /**
     * Configuration for the OAuth Resource Owner Password flow.
     */
    public password?: ResourceOwnerPasswordOAuthFlow;

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

        if (this.authorizationCode !== undefined) {
            result.authorizationCode = this.authorizationCode;
        }

        if (this.clientCredentials !== undefined) {
            result.clientCredentials = this.clientCredentials;
        }

        if (this.implicit !== undefined) {
            result.implicit = this.implicit;
        }

        if (this.password !== undefined) {
            result.password = this.password;
        }

        return result;
    }
}
