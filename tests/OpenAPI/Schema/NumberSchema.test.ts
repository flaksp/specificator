import {ExternalDocumentation} from "../../../src/OpenAPI/ExternalDocumentation";
import {NumberSchema} from "../../../src/OpenAPI/Schema/NumberSchema";
import {serialize} from "../../../src/Serializer/Serializer";

test("NumberSchema should be serializable", () => {
    const object = new NumberSchema({
        anyOf: [],
        default: 500,
        deprecated: true,
        description: "Test description",
        example: 500,
        exclusiveMaximum: 1000,
        exclusiveMinimum: 100,
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        format: "float",
        maximum: 1000,
        minimum: 100,
        multipleOf: 10,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        writeOnly: false,
    });

    expect(serialize(object)).toEqual({
        anyOf: [],
        default: 500,
        deprecated: true,
        description: "Test description",
        example: 500,
        exclusiveMaximum: 1000,
        exclusiveMinimum: 100,
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        format: "float",
        maximum: 1000,
        minimum: 100,
        multipleOf: 10,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "number",
        writeOnly: false,
    });
});
