import {Discriminator} from "../../../src/OpenAPI/Discriminator";
import {ExternalDocumentation} from "../../../src/OpenAPI/ExternalDocumentation";
import {ObjectSchema} from "../../../src/OpenAPI/Schema/ObjectSchema";
import {serialize} from "../../../src/Serializer/Serializer";

test("ObjectSchema should be serializable", () => {
    const object = new ObjectSchema({
        additionalProperties: false,
        anyOf: [],
        deprecated: true,
        description: "Test description",
        discriminator: new Discriminator({
            mapping: {
                bar: "#/components/bar",
                foo: "#/components/test",
            },
            propertyName: "type",
        }),
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        maxProperties: 5,
        minProperties: 1,
        not: [],
        nullable: true,
        oneOf: [],
        properties: {},
        readOnly: true,
        required: [],
        title: "Test title",
        writeOnly: false,
    });

    expect(serialize(object)).toEqual({
        additionalProperties: false,
        anyOf: [],
        deprecated: true,
        description: "Test description",
        discriminator: {
            mapping: {
                bar: "#/components/bar",
                foo: "#/components/test",
            },
            propertyName: "type",
        },
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        maxProperties: 5,
        minProperties: 1,
        not: [],
        nullable: true,
        oneOf: [],
        properties: {},
        readOnly: true,
        required: [],
        title: "Test title",
        type: "object",
        writeOnly: false,
    });
});
