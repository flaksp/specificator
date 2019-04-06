# Recommendations

This article contains collection of recommendations that don't relate to Specificator directly, but still may be useful for maintaining you documentation.

## Avoid using Markdown directly in TypeScript strings

Move these strings to separate `.md` files. As bonus you will be able to lint these files with Markdown linters such as [markdownlint](https://github.com/DavidAnson/markdownlint) ([markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)).

## Use any TypeScript linter

Maintaining huge documentation may be painful if code style is inconsistent. It's recommended to define one code style via linters and check it via continues integration. For example, you may use [TSLint](https://github.com/palantir/tslint) and Specificator's code style configuration defined in [`tslint.json`](../tslint.json) file.
