.DEFAULT_GOAL := help

TSLINT_COMMAND = node_modules/.bin/tslint --project .

dependencies-installation: npm-dependencies-installation ## Install all dependencies required for project

npm-dependencies-installation: ## Install NPM dependencies
	npm install

build: ## Compiles library
	rm -rf dist
	node_modules/.bin/tsc

publish: ## Publishes library to NPM registry
	node_modules/.bin/npm-publish-git-tag

lint: lint-ts lint-md ## Lint code style of entire project

lint-ts: ## Lint TypeScript code style with TSLint
	${TSLINT_COMMAND}

lint-md: ## Link Markdown files with markdownlint
	node_modules/.bin/markdownlint *.md docs/*.md

cs-fixes: cs-fixes-ts ## Fix code style of entire project

cs-fixes-ts: ## Fix TypeScript code style with TSLint
	${TSLINT_COMMAND} --fix

help: ## View documentation for this Makefile
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
