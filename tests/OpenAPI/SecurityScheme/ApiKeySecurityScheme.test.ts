import {ApiKeySecurityScheme} from "../../../src/OpenAPI/SecurityScheme/ApiKeySecurityScheme";
import {serialize} from "../../../src/Serializer/Serializer";

test("ApiKeySecurityScheme should be serializable", () => {
    const object = new ApiKeySecurityScheme({
        description: "Test description",
        in: "query",
        name: "test",
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        in: "query",
        name: "test",
        type: "apiKey",
    });
});
