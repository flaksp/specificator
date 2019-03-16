import {ExternalDocumentation} from "../../src/OpenAPI/ExternalDocumentation";
import {serialize} from "../../src/Serializer/Serializer";

test("ExternalDocumentation should be serializable", () => {
    const object = new ExternalDocumentation({
        description: "Test description",
        url: "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        url: "https://example.com/test",
    });
});
