import {Server} from "../../src/OpenAPI/Server";
import {serialize} from "../../src/Serializer/Serializer";

test("Server should be serializable", () => {
    const object = new Server({
        description: "Test description",
        url: "https://example.com/test",
        variables: {},
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        url: "https://example.com/test",
        variables: {},
    });
});
