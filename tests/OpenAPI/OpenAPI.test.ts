import {Components} from "../../src/OpenAPI/Components";
import {Contact} from "../../src/OpenAPI/Contact";
import {ExternalDocumentation} from "../../src/OpenAPI/ExternalDocumentation";
import {Info} from "../../src/OpenAPI/Info";
import {License} from "../../src/OpenAPI/License";
import {OpenAPI} from "../../src/OpenAPI/OpenAPI";
import {serialize} from "../../src/Serializer/Serializer";

test("OpenAPI should be serializable", () => {
    const object = new OpenAPI({
        components: new Components({
            callbacks: {},
            examples: {},
            headers: {},
            links: {},
            parameters: {},
            requestBodies: {},
            responses: {},
            schemas: {},
            securitySchemes: {},
        }),
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        info: new Info({
            contact: new Contact({
                email: "test@example.com",
                name: "Test name",
                url: "https://example.com/test",
            }),
            description: "Test description",
            license: new License({
                name: "Test license",
                url: "https://example.com/test",
            }),
            termsOfService: "https://example.com/test",
            title: "Test title",
            version: "1.0.0",
        }),
        paths: {},
        security: [],
        servers: [],
        tags: [],
    });

    expect(serialize(object)).toEqual({
        components: {
            callbacks: {},
            examples: {},
            headers: {},
            links: {},
            parameters: {},
            requestBodies: {},
            responses: {},
            schemas: {},
            securitySchemes: {},
        },
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        info: {
            contact: {
                email: "test@example.com",
                name: "Test name",
                url: "https://example.com/test",
            },
            description: "Test description",
            license: {
                name: "Test license",
                url: "https://example.com/test",
            },
            termsOfService: "https://example.com/test",
            title: "Test title",
            version: "1.0.0",
        },
        openapi: "3.0.2",
        paths: {},
        security: [],
        servers: [],
        tags: [],
    });
});
