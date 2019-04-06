# Quick start

## Install TypeScript

```console
npm install typescript --save-dev
```

If you need configuration file, you may use Specificator's one as example: just copy our [`tsconfig.json`](../tsconfig.json) to your project's root.

## Install Specificator Serializer

We recommend you install specificator-serializer. You may find installation instructions inside [specificator-serializer](https://www.npmjs.com/package/specificator-serializer) package documentation.

## Compiling "hello world" specification

Create `openapi.ts` file and paste there this code:

```typescript
import {Contact, Info, License, OpenAPI} from "specificator";
import {Serializer} from "specificator-serializer";
const fs = require('fs');

const documentationSchema = new OpenAPI({
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
});

const serializer = new Serializer();

const serializedDocumentation = serializer.serialize(documentationSchema);
const serializedDocumentationJson = JSON.stringify(serializedDocumentation);

fs.writeFileSync("openapi.json", serializedDocumentationJson);
```

Then run in your console:

```console
tsc openapi.ts && node openapi.js
```

It uses TypeScript compiler to compile your openapi.ts file to JavaScript and then it uses Node.js to execute this JS file.
