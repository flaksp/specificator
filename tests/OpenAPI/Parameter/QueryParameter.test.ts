import {QueryParameter} from "../../../src/OpenAPI/Parameter/QueryParameter";
import {Reference} from "../../../src/OpenAPI/Reference";
import {serialize} from "../../../src/Serializer/Serializer";

test("QueryParameter should be serializable", () => {
    const object = new QueryParameter({
        allowReserved: true,
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
        allowReserved: true,
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        in: "query",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
