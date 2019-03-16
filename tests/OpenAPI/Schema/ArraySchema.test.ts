import {ExternalDocumentation} from "../../../src/OpenAPI/ExternalDocumentation";
import {Reference} from "../../../src/OpenAPI/Reference";
import {ArraySchema} from "../../../src/OpenAPI/Schema/ArraySchema";
import {serialize} from "../../../src/Serializer/Serializer";

test("ArraySchema should be serializable", () => {
    const object = new ArraySchema({
        anyOf: [],
        deprecated: true,
        description: "Test description",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        items: new Reference({
            $ref: "#/test",
        }),
        maxItems: 5,
        minItems: 1,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        uniqueItems: true,
        writeOnly: false,
    });

    expect(serialize(object)).toEqual({
        anyOf: [],
        deprecated: true,
        description: "Test description",
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        items: {
            $ref: "#/test",
        },
        maxItems: 5,
        minItems: 1,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "array",
        uniqueItems: true,
        writeOnly: false,
    });
});
