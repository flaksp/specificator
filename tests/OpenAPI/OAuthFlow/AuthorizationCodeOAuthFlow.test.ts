import {AuthorizationCodeOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/AuthorizationCodeOAuthFlow";
import {serialize} from "../../../src/Serializer/Serializer";

test("AuthorizationCodeOAuthFlow should be serializable", () => {
    const object = new AuthorizationCodeOAuthFlow({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });
});
