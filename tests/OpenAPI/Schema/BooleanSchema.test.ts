import {ExternalDocumentation} from "../../../src/OpenAPI/ExternalDocumentation";
import {BooleanSchema} from "../../../src/OpenAPI/Schema/BooleanSchema";
import {serialize} from "../../../src/Serializer/Serializer";

test("BooleanSchema should be serializable", () => {
    const object = new BooleanSchema({
        anyOf: [],
        default: true,
        deprecated: true,
        description: "Test description",
        example: true,
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        writeOnly: false,
    });

    expect(serialize(object)).toEqual({
        anyOf: [],
        default: true,
        deprecated: true,
        description: "Test description",
        example: true,
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "boolean",
        writeOnly: false,
    });
});
