import {Example} from "../../src/OpenAPI/Example";
import {serialize} from "../../src/Serializer/Serializer";

test("Example should be serializable", () => {
    const object = new Example({
        description: "Test description",
        externalValue: "Test externalValue",
        summary: "Test summary",
        value: "Test value",
    });

    expect(serialize(object)).toEqual({
        description: "Test description",
        externalValue: "Test externalValue",
        summary: "Test summary",
        value: "Test value",
    });
});
