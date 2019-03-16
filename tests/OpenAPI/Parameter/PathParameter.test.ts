import {PathParameter} from "../../../src/OpenAPI/Parameter/PathParameter";
import {Reference} from "../../../src/OpenAPI/Reference";
import {serialize} from "../../../src/Serializer/Serializer";

test("PathParameter should be serializable", () => {
    const object = new PathParameter({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        name: "test",
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
        in: "path",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
