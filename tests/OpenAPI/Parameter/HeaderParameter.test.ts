import {HeaderParameter} from "../../../src/OpenAPI/Parameter/HeaderParameter";
import {Reference} from "../../../src/OpenAPI/Reference";
import {serialize} from "../../../src/Serializer/Serializer";

test("HeaderParameter should be serializable", () => {
    const object = new HeaderParameter({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        name: "test",
        required: true,
        schema: new Reference({
            $ref: "#/foo/bar",
        }),
    });

    expect(serialize(object)).toEqual({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        in: "header",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
