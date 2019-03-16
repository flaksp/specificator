import {ExternalDocumentation} from "../../../src/OpenAPI/ExternalDocumentation";
import {StringSchema} from "../../../src/OpenAPI/Schema/StringSchema";
import {serialize} from "../../../src/Serializer/Serializer";

test("StringSchema should be serializable", () => {
    const object = new StringSchema({
        anyOf: [],
        default: "Test default",
        deprecated: true,
        description: "Test description",
        enum: ["foo", "bar"],
        example: "Test example",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        format: "test",
        maxLength: 1000,
        minLength: 5,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        writeOnly: false,
    });

    expect(serialize(object)).toEqual({
        anyOf: [],
        default: "Test default",
        deprecated: true,
        description: "Test description",
        enum: ["foo", "bar"],
        example: "Test example",
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        format: "test",
        maxLength: 1000,
        minLength: 5,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "string",
        writeOnly: false,
    });
});
