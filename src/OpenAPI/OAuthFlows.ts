import {SerializableInterface} from "../Serializer/Serializer";
import {AuthorizationCodeOAuthFlow} from "./OAuthFlow/AuthorizationCodeOAuthFlow";
import {ClientCredentialsOAuthFlow} from "./OAuthFlow/ClientCredentialsOAuthFlow";
import {ImplicitOAuthFlow} from "./OAuthFlow/ImplicitOAuthFlow";
import {ResourceOwnerPasswordOAuthFlow} from "./OAuthFlow/ResourceOwnerPasswordOAuthFlow";

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
export class OAuthFlows implements OAuthFlowsInterface, SerializableInterface {
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

    public serialize(): { [p: string]: any } {
        return this;
    }
}
