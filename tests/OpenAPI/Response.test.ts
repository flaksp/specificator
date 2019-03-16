import {Response} from "../../src/OpenAPI/Response";
import {serialize} from "../../src/Serializer/Serializer";

test("Response should be serializable", () => {
    const object = new Response({
        content: {},
        description: "Test description",
        headers: {},
        links: {},
    });

    expect(serialize(object)).toEqual({
        content: {},
        description: "Test description",
        headers: {},
        links: {},
    });
});
