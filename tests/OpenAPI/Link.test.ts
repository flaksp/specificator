import {Link} from "../../src/OpenAPI/Link";
import {Server} from "../../src/OpenAPI/Server";
import {serialize} from "../../src/Serializer/Serializer";

test("Link should be serializable", () => {
    const object = new Link({
        description: "Test description",
        operationId: "foo",
        operationRef: "#/foo",
        parameters: {},
        requestBody: "foo",
        server: new Server({
            description: "Test description",
            url: "https://example.com/test",
            variables: {},
        }),
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        operationId: "foo",
        operationRef: "#/foo",
        parameters: {},
        requestBody: "foo",
        server: {
            description: "Test description",
            url: "https://example.com/test",
            variables: {},
        },
    });
});
