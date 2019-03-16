import {CookieParameter} from "../../../src/OpenAPI/Parameter/CookieParameter";
import {Reference} from "../../../src/OpenAPI/Reference";
import {serialize} from "../../../src/Serializer/Serializer";

test("CookieParameter should be serializable", () => {
    const object = new CookieParameter({
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
        in: "cookie",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
