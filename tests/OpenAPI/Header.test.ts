import {Header} from "../../src/OpenAPI/Header";
import {StringSchema} from "../../src/OpenAPI/Schema/StringSchema";
import {serialize} from "../../src/Serializer/Serializer";

test("Header should be serializable", () => {
    const object = new Header({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        required: true,
        schema: new StringSchema({
            default: "Test default",
            example: "Test example",
            maxLength: 100,
            minLength: 50,
            pattern: "^test$",
        }),
    });

    expect(serialize(object)).toEqual({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        required: true,
        schema: {
            default: "Test default",
            deprecated: false,
            example: "Test example",
            maxLength: 100,
            minLength: 50,
            nullable: false,
            pattern: "^test$",
            readOnly: false,
            type: "string",
            writeOnly: false,
        },
    });
});
