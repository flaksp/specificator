import {ClientCredentialsOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/ClientCredentialsOAuthFlow";
import {serialize} from "../../../src/Serializer/Serializer";

test("ClientCredentialsOAuthFlow should be serializable", () => {
    const object = new ClientCredentialsOAuthFlow({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });
});
