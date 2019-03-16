import {ExternalDocumentation} from "../../src/OpenAPI/ExternalDocumentation";
import {Operation} from "../../src/OpenAPI/Operation";
import {Reference} from "../../src/OpenAPI/Reference";
import {serialize} from "../../src/Serializer/Serializer";

test("Operation should be serializable", () => {
    const object = new Operation({
        callbacks: {},
        deprecated: true,
        description: "Test description",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        operationId: "test_operation",
        parameters: [],
        requestBody: new Reference({
            $ref: "#/foo",
        }),
        responses: {},
        security: [],
        servers: [],
        summary: "Test summary",
        tags: [],
    });

    expect(serialize(object)).toEqual({
        callbacks: {},
        deprecated: true,
        description: "Test description",
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        operationId: "test_operation",
        parameters: [],
        requestBody: {
            $ref: "#/foo",
        },
        responses: {},
        security: [],
        servers: [],
        summary: "Test summary",
        tags: [],
    });
});
