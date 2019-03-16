import {Contact} from "../../src/OpenAPI/Contact";
import {serialize} from "../../src/Serializer/Serializer";

test("Contact should be serializable", () => {
    const object = new Contact({
        email: "test@example.com",
        name: "Test name",
        url: "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        email: "test@example.com",
        name: "Test name",
        url: "https://example.com/test",
    });
});
