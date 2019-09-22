# Specificator

> **Achtung!** This library is in early development state so it's unstable. It works now, but there are no guarantees for API stability (it may change during development). We are testing this library inside our projects and adopting some features to make it feel better. Please wait for version 1.0 and don't use it inside real projects.

Specificator is a framework (you may call it collection of DTOs) designed to help you write [OpenAPI 3 documentation](https://github.com/OAI/OpenAPI-Specification/tree/master/versions) using TypeScript and its strict type system.

All of us know it's hard to support OpenAPI 3 documentation. People use different ways to write it: [Jsonnet](https://jsonnet.org/), [Go templates](https://golang.org/pkg/text/template/), [JSON Pointers](https://tools.ietf.org/html/rfc6901) inside plain JSON/YAML files and many other exotic ways. Sometimes our docs become huge and hard to support; weak tools are risky for developers and they are vulnerable to mistakes. Some tools say nothing when you do something wrong: for example you may not notice a typo in a property name and your documentation may become invalid for visualization tools such as [ReDoc](https://github.com/Rebilly/ReDoc) and [Swagger UI](https://github.com/swagger-api/swagger-ui). That's because most of solutions are weak [DSLs](https://en.wikipedia.org/wiki/Domain-specific_language) not designed for that purpose. We suggest that you stop using these solutions and start using strict frameworks such as Specificator.

## Documentation

For installation instructions, usage docs and examples please visit [docs/README.md](docs/README.md) file.

## Related projects & packages

To find projects related to Specificator browse at

* npm Registry for [`specificator`](https://www.npmjs.com/search?q=keywords:specificator) keyword.
* GitHub for [`specificator`](https://github.com/topics/specificator) topic.
