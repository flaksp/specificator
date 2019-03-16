import {AuthorizationCodeOAuthFlow} from "../../src/OpenAPI/OAuthFlow/AuthorizationCodeOAuthFlow";
import {ClientCredentialsOAuthFlow} from "../../src/OpenAPI/OAuthFlow/ClientCredentialsOAuthFlow";
import {ImplicitOAuthFlow} from "../../src/OpenAPI/OAuthFlow/ImplicitOAuthFlow";
import {ResourceOwnerPasswordOAuthFlow} from "../../src/OpenAPI/OAuthFlow/ResourceOwnerPasswordOAuthFlow";
import {OAuthFlows} from "../../src/OpenAPI/OAuthFlows";
import {serialize} from "../../src/Serializer/Serializer";

test("OAuthFlows should be serializable", () => {
    const object = new OAuthFlows({
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
    });

    expect(serialize(object)).toEqual({
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
    });
});
