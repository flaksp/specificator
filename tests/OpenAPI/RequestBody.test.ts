import {RequestBody} from "../../src/OpenAPI/RequestBody";
import {serialize} from "../../src/Serializer/Serializer";

test("RequestBody should be serializable", () => {
    const object = new RequestBody({
        content: {},
        description: "Test description",
        required: true,
    });

    expect(serialize(object)).toEqual({
        content: {},
        description: "Test description",
        required: true,
    });
});
