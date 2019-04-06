# Custom OpenAPI objects

Sometimes you need to create objects that not covered by OpenAPI 3 specification (they may be known as [specification extensions](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#specificationExtensions)). They are not covered by specification, so they are missing in Specificator too. A good example is [ReDoc](https://github.com/Rebilly/ReDoc) - it's open source tool which allows you to visualize your OpenAPI documentation. ReDoc offers ability to group tags using custom schema called [Tag Group Object](https://github.com/Rebilly/ReDoc/blob/master/docs/redoc-vendor-extensions.md#tagGroupObject), so your OpenAPI object may look like this:

```json
{
  "tags": [
    {
      "name": "Cats"
    },
    {
      "name": "Dogs"
    },
  ],
  "x-tagGroups": [
    {
      "name": "Pets",
      "tags": [
        "Cats",
        "Dogs"
      ]
    }
  ]
}
```

To compile such JSON via Specificator we need to create new object called `TagGroup`:

```typescript
import {ExternalDocumentation} from "specificator";
import {SerializableInterface} from "../Serializer/SerializableInterface";

export interface TagGroupInterface {
    name: string;

    tags: string[];
}


export class TagGroup implements TagGroupInterface, SerializableInterface {
    constructor(properties: TagGroupInterface) {
        Object.assign(this, properties);
    }

    public name: string;

    public tags: string[];

    public serialize(): { [p: string]: any } {
        return this;
    }
}
```

There are two ways to add these object to OpenAPI object.

## The first way: unsafe but fast

The first one easiest way is just passing new field to the constructor:

```typescript
import {Info, OpenAPI, Tag} from "specificator";
import {TagGroup} from "./src/TagGroup";

const documentationSchema = new OpenAPI({
    info: new Info({
        title: "Test title",
        version: "1.0.0",
    }),
    paths: {},
    tags: [
        new Tag({
            name: "Cats"
        }),
        new Tag({
            name: "Dogs"
        }),
    ],
    "x-tagGroups": [
        new TagGroup({
            name: "Pets",
            tags: [
                "Cats",
                "Dogs"
            ]
        })
    ]
});
```

But this way **isn't recommended** because of it's a bit magic. TypeScript will not tell you anything if `x-tagGroups` will contain something what you don't expect to be there.

## The second way: safe

The recommended second way is to create custom OpenAPI object (call it `ReDocFlavoredOpenAPI.ts`) and use it everywhere instead of default OpenAPI object:

```typescript
import {OpenAPI, OpenAPIInterface} from "specificator";
import {TagGroup} from "./src/TagGroup";

export interface ReDocFlavoredOpenAPIInterface extends OpenAPIInterface {
    tagGroups?: TagGroup[];
}

export class ReDocFlavoredOpenAPI extends OpenAPI implements ReDocFlavoredOpenAPIInterface {

    constructor(properties: ReDocFlavoredOpenAPIInterface) {
        Object.assign(this, properties);
    }

    public tagGroups?: TagGroup[];

    public serialize(): { [p: string]: any } {
        const obj = this;

        if (this.tagGroups !== undefined) {
            obj["x-tagGroups"] = this.tagGroups;
            delete obj.tagGroups;
        }

        return obj;
    }
}
```

Usage example:

```typescript
import {Info, Tag} from "specificator";
import {ReDocFlavoredOpenAPI} from "./src/ReDocFlavoredOpenAPI";
import {TagGroup} from "./src/TagGroup";

const documentationSchema = new ReDocFlavoredOpenAPI({
    info: new Info({
        title: "Test title",
        version: "1.0.0",
    }),
    paths: {},
    tags: [
        new Tag({
            name: "Cats"
        }),
        new Tag({
            name: "Dogs"
        }),
    ],
    tagGroups: [
        new TagGroup({
            name: "Pets",
            tags: [
                "Cats",
                "Dogs"
            ]
        })
    ]
});
```
