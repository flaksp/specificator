import {Encoding} from "../../src/OpenAPI/Encoding";
import {serialize} from "../../src/Serializer/Serializer";

test("Encoding should be serializable", () => {
    const object = new Encoding({
        allowReserved: true,
        contentType: "application/json",
        headers: {},
    });

    expect(serialize(object)).toEqual({
        allowReserved: true,
        contentType: "application/json",
        headers: {},
    });
});
