import {Contact} from "../../src/OpenAPI/Contact";
import {Info} from "../../src/OpenAPI/Info";
import {License} from "../../src/OpenAPI/License";
import {serialize} from "../../src/Serializer/Serializer";

test("Info should be serializable", () => {
    const object = new Info({
        contact: new Contact({
            email: "test@example.com",
            name: "Test name",
            url: "https://example.com/test",
        }),
        description: "Test description",
        license: new License({
            name: "Test license",
            url: "https://example.com/test",
        }),
        termsOfService: "https://example.com/test",
        title: "Test title",
        version: "1.0.0",
    });

    expect(serialize(object)).toEqual({
        contact: {
            email: "test@example.com",
            name: "Test name",
            url: "https://example.com/test",
        },
        description: "Test description",
        license: {
            name: "Test license",
            url: "https://example.com/test",
        },
        termsOfService: "https://example.com/test",
        title: "Test title",
        version: "1.0.0",
    });
});
