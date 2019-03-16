import {ServerVariable} from "../../src/OpenAPI/ServerVariable";
import {serialize} from "../../src/Serializer/Serializer";

test("ServerVariable should be serializable", () => {
    const object = new ServerVariable({
        default: "foo",
        description: "Test description",
        enum: ["foo", "bar"],
    });

    expect(serialize(object)).toEqual({
        default: "foo",
        description: "Test description",
        enum: ["foo", "bar"],
    });
});
