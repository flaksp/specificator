import {ExternalDocumentation} from "../../src/OpenAPI/ExternalDocumentation";
import {Tag} from "../../src/OpenAPI/Tag";
import {serialize} from "../../src/Serializer/Serializer";

test("Tag should be serializable", () => {
    const object = new Tag({
        description: "Test description",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        name: "Test name",
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        name: "Test name",
    });
});
