import {AuthorizationCodeOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/AuthorizationCodeOAuthFlow";
import {ClientCredentialsOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/ClientCredentialsOAuthFlow";
import {ImplicitOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/ImplicitOAuthFlow";
import {ResourceOwnerPasswordOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/ResourceOwnerPasswordOAuthFlow";
import {OAuthFlows} from "../../../src/OpenAPI/OAuthFlows";
import {OAuth2SecurityScheme} from "../../../src/OpenAPI/SecurityScheme/OAuth2SecurityScheme";
import {serialize} from "../../../src/Serializer/Serializer";

test("OAuth2SecurityScheme should be serializable", () => {
    const object = new OAuth2SecurityScheme({
        description: "Test description",
        flows: new OAuthFlows({
            authorizationCode: new AuthorizationCodeOAuthFlow({
                authorizationUrl: "https://example.com/test",
                refreshUrl: "https://example.com/test",
                scopes: {},
                tokenUrl: "https://example.com/test",
            }),
            clientCredentials: new ClientCredentialsOAuthFlow({
                refreshUrl: "https://example.com/test",
                scopes: {},
                tokenUrl: "https://example.com/test",
            }),
            implicit: new ImplicitOAuthFlow({
                authorizationUrl: "https://example.com/test",
                refreshUrl: "https://example.com/test",
                scopes: {},
            }),
            password: new ResourceOwnerPasswordOAuthFlow({
                refreshUrl: "https://example.com/test",
                scopes: {},
                tokenUrl: "https://example.com/test",
            }),
        }),
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        flows: {
            authorizationCode: {
                authorizationUrl: "https://example.com/test",
                refreshUrl: "https://example.com/test",
                scopes: {},
                tokenUrl: "https://example.com/test",
            },
            clientCredentials: {
                refreshUrl: "https://example.com/test",
                scopes: {},
                tokenUrl: "https://example.com/test",
            },
            implicit: {
                authorizationUrl: "https://example.com/test",
                refreshUrl: "https://example.com/test",
                scopes: {},
            },
            password: {
                refreshUrl: "https://example.com/test",
                scopes: {},
                tokenUrl: "https://example.com/test",
            },
        },
        type: "oauth2",
    });
});
