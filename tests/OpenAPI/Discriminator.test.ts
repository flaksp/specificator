import {Discriminator} from "../../src/OpenAPI/Discriminator";
import {serialize} from "../../src/Serializer/Serializer";

test("Discriminator should be serializable", () => {
    const object = new Discriminator({
        mapping: {
            bar: "#/components/bar",
            foo: "#/components/test",
        },
        propertyName: "type",
    });

    expect(serialize(object)).toEqual({
        mapping: {
            bar: "#/components/bar",
            foo: "#/components/test",
        },
        propertyName: "type",
    });
});
