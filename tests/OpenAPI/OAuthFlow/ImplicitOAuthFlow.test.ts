import {ImplicitOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/ImplicitOAuthFlow";
import {serialize} from "../../../src/Serializer/Serializer";

test("ImplicitOAuthFlow should be serializable", () => {
    const object = new ImplicitOAuthFlow({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
    });

    expect(serialize(object)).toEqual({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
    });
});
