# Documentation

## Installation

Install from [npm Registry](https://www.npmjs.com/package/@neluzhin/specificator):

```console
npm install @neluzhin/specificator --save-dev
```

The package is also available in [GitHub Package Registry](https://github.com/neluzhin/specificator/packages).

## Quick start

If you need start quickly, see [quick start](./quick-start.md) guide. It also contains usage examples.

## Class reference

Specificator classes mapped 1-to-1 to OpenAPI 3 specification. For example Specificator's [Tag.ts](../src/OpenAPI/Tag.ts) has the same structure as written in OpenAPI's [Tag Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#tagObject) definition. Feel free to read Specificator's [sources](../src) because they're well documented.

## Mastering Specificator

To take all benefits from Specificator, please read all topics (you may read then in any order):

* [Using serializer](https://github.com/neluzhin/specificator-serializer)
* [Custom OpenAPI objects](custom-openapi-objects.md) (also known as [specification extensions](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#specificationExtensions))
* [Reusable schemas](reusable-schemas.md)
* [Safe objects modifications](safe-objects-modifications.md)
* [Recommendations](recommendations.md)
