import { License } from "../../src/OpenAPI/License";
import {serialize} from "../../src/Serializer/Serializer";

test("Licence should be serializable", () => {
    const object = new License({
        name: "Test license",
        url: "https://example.com/test",
    });

    expect(serialize(object)).toEqual({
        name: "Test license",
        url: "https://example.com/test",
    });
});
