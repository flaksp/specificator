import {Reference} from "../../src/OpenAPI/Reference";
import {serialize} from "../../src/Serializer/Serializer";

test("Reference should be serializable", () => {
    const object = new Reference({
        $ref: "#/foo/bar",
    });

    expect(serialize(object)).toEqual({
        $ref: "#/foo/bar",
    });
});
