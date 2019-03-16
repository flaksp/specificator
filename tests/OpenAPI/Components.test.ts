import {Components} from "../../src/OpenAPI/Components";
import {serialize} from "../../src/Serializer/Serializer";

test("Components should be serializable", () => {
    const object = new Components({
        callbacks: {},
        examples: {},
        headers: {},
        links: {},
        parameters: {},
        requestBodies: {},
        responses: {},
        schemas: {},
        securitySchemes: {},
    });

    expect(serialize(object)).toEqual({
        callbacks: {},
        examples: {},
        headers: {},
        links: {},
        parameters: {},
        requestBodies: {},
        responses: {},
        schemas: {},
        securitySchemes: {},
    });
});
