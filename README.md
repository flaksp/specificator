# Specificator

[![NPM downloads](https://img.shields.io/npm/dm/specificator.svg)](https://www.npmjs.com/package/specificator)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?maxAge=604800)](https://renovatebot.com/)

> **Achtung!** This library is in early development state so it's unstable. It works now, but there are no guarantees for API stability (it may change during development). We are testing this library inside our projects and adopting some features to make it feel better. Please wait for version 1.0 and don't use it inside real projects.

Specificator is a framework (you may call it collection of DTOs) designed to help you write [OpenAPI 3 documentation](https://github.com/OAI/OpenAPI-Specification/tree/master/versions).

## Documentation

For installation instructions, usage docs and examples please visit [docs/README.md](docs/README.md) file.

## What problems does Specificator solve?

All of us know it's hard to support OpenAPI 3 documentation. People use different ways to write it: [Jsonnet](https://jsonnet.org/), [Go templates](https://golang.org/pkg/text/template/), JSON Pointers inside plain JSON/YAML files and many other exotic ways. Sometimes our docs become huge and hard to support; weak tools are risky for developers and they are vulnerable to mistakes. Some tools say nothing when you do something wrong: for example you may not notice a typo in a property name and your documentation may become invalid for visualization tools such as [ReDoc](https://github.com/Rebilly/ReDoc) and [Swagger UI](https://github.com/swagger-api/swagger-ui). That's because most of solutions are weak [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language) not designed for that purpose. We suggest that you stop using these solutions and start using strict frameworks such as Specificator.

Specificator is a framework written fully in [TypeScript](https://www.typescriptlang.org/) language - it's just like JavaScript, but with strict type system. We believe that TypeScript is the best language for that purpose because it's the most generic language for web developers (developing HTTP APIs is kind of web development, huh), it's easy to dive in and it has large community.

The framework offers collection of classes you may use to represent your documentation. For example, if you want to describe [Tag Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#tagObject), you will write something like this:

```typescript
import {Tag} from "specificator";

const catTag = new Tag({
    name: "Cats",
    description: "All endpoints in this category relate to cats",
});
```

More on the way! TypeScript is a real programming language! While you're compiling you documentation, you may do anything: use external libraries, do HTTP requests, use conditions and loops, use variables and more! Everything is possible to do with JavaScript and TypeScript available in your documentation writing workflow. Let's see some example:

```typescript
import {MediaType, Operation, Response, StringSchema, Tag} from "specificator";

const catTag = new Tag({
    name: "Cats",
    description: "All endpoints in this category relate to cats",
});

const createCatOperation = new Operation({
    tags: [
        catTag.name,
    ],
    responses: {
        "201": new Response({
            description: "Response if cat was created successfully.",
            content: {
                "text/plain": new MediaType({
                    schema: new StringSchema({
                        example: "Yay! ID of a created cat is 235!",
                    }),
                }),
            },
        }),
    },
});
```
