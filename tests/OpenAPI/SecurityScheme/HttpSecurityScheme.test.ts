import {HttpSecurityScheme} from "../../../src/OpenAPI/SecurityScheme/HttpSecurityScheme";
import {serialize} from "../../../src/Serializer/Serializer";

test("HttpSecurityScheme should be serializable", () => {
    const object = new HttpSecurityScheme({
        bearerFormat: "JWT",
        description: "Test description",
        scheme: "Bearer",
    });

    expect(serialize(object)).toEqual({
        bearerFormat: "JWT",
        description: "Test description",
        scheme: "Bearer",
        type: "http",
    });
});
