# Contributing to Specificator

## Working with command line tools

Everything you will probably need (running tests, linter, build, etc) is located inside [Makefile](Makefile) file. If you're not familiar with Makefile, enter directory with Makefile and type:

```console
make
```

This command will print all available commands. To run any command listed there, simply type `make <command>`, for example how to run tests:

```console
make tests
```

Do not create `scripts` section inside [package.json](package.json) file, please contribute to [Makefile](Makefile).

## Code style

Follow code style defined by TSLint. To ensure everything is OK run this command before every commit:

```console
make cs-fixes
```

## OpenAPI 3 updates

If there is new version of OpenAPI 3 and Specificator doesn't support it yet, please [open an issue](https://github.com/neluzhin/specificator/issues).

### Updating Specificator manually

Follow these steps:

1. Check which version is currently supported by Specificator. You may find it inside [src/OpenAPI/OpenAPI.ts](src/OpenAPI/OpenAPI.ts) file.
2. Now you need to find specification for that version. Open raw markdown text. You may find OpenAPI specification texts inside [OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification) repository. For example this is raw text for version 3.0.2: [raw.githubusercontent.com/OAI/OpenAPI-Specification/master/versions/3.0.2.md](https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/versions/3.0.2.md). Copy it.
3. Reproduce the same steps, but for new version of OpenAPI spec.
4. Copy both versions of specs to any tool that checks for differences in two texts. For example, you may use [diffchecker.com](https://www.diffchecker.com/).
5. Every class and its properties contain docs that copy-pasted from specification. Modify any diffs you have found at previous step.
6. And of course fix version inside [src/OpenAPI/OpenAPI.ts](src/OpenAPI/OpenAPI.ts) file.

## Commit message formats

### Good examples

It's clean what changed and where it was happen:

> Add license details to README.md

> Add TSLint rule that checks unused variables

> Remove unused dependencies

> Improve Travis CI run speed

### Bad examples

This message does not explain what was updated:

> Updated README.md

Do not write verbs in past tense:

> Remov**ed** unused dependencies

This commit message does not describe anything:

> Small fixes

This commit message contains dot at the end:

> Improve contributing guidelines.

This one is too long (maybe it's good idea to split this commit):

> Update Jest and refactor tests to use new features provided by latest Jest version

## Questions?

If you have questions or ideas, feel free to [create an issue](https://github.com/neluzhin/specificator/issues).
