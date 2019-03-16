import {OpenIdConnectSecurityScheme} from "../../../src/OpenAPI/SecurityScheme/OpenIdConnectSecurityScheme";
import {serialize} from "../../../src/Serializer/Serializer";

test("OpenIdConnectSecurityScheme should be serializable", () => {
    const object = new OpenIdConnectSecurityScheme({
        description: "Test description",
        openIdConnectUrl: "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        openIdConnectUrl: "https://example.com/test",
        type: "openIdConnect",
    });
});
