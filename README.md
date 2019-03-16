`# Specificator

Specificator is a framework (you may call it collection of DTOs) designed to help you writing [OpenAPI 3 documentation](https://github.com/OAI/OpenAPI-Specification/tree/master/versions).

## Alternatives

In era before Specificator people wrote OpenAPI docs using these crazy ways:

* Some people wrote plain JSON files. Nuff said.
* Somebody wrote YAML files and linked them together using JSON pointers. That's better than JSON, but not so flexible as we may want.
* Most lazy developers parsed application source code and generated OpenAPI using some tools and libraries. But that's absolutely not flexible because there are no any tool in any language that's richy extendable. And these tools become useless when you start developing something specific like micro services.

All these problems are solved in Specificator.

## Why Specificator?

* Write your docs in real programming language called TypeScript. You may use anything here: loops, reading files, another libraries. You are not limited. Use anything is possible to do with TypeScript.
* Because of it's written in TypeScript, your IDE and compiler will help you and even will say what you're writing wrong.
* Almost everything is extendable. That's just OOP, bros.
* Specificator's classes are mapped to OpenAPI. If you already know OpenAPI 3, you know Specificator too. However it's recommended to read Specificator's short documentation that covers some edge cases.
* Sources are well documented and easy to read.

Specificator tries to handle as much as possible at compilation time, so if your documentation was compiled successfully, it will be *probably* valid. But you still should know and respect [OpenAPI 3 specification](https://github.com/OAI/OpenAPI-Specification/tree/master/versions) because this tool does not worry about everything. 

## Documentation

For usage docs and examples please visit [docs/README.md](docs/README.md) file.

For contributing docs and recommendations see [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

Specificator is licensed under MIT license. For further details please see [LICENSE](LICENSE) file.
