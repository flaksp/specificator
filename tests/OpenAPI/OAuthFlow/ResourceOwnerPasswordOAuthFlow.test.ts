import {ResourceOwnerPasswordOAuthFlow} from "../../../src/OpenAPI/OAuthFlow/ResourceOwnerPasswordOAuthFlow";
import {serialize} from "../../../src/Serializer/Serializer";

test("ResourceOwnerPasswordOAuthFlow should be serializable", () => {
    const object = new ResourceOwnerPasswordOAuthFlow({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl: "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl: "https://example.com/test",
    });
});
