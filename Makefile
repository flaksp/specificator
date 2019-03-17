.DEFAULT_GOAL := help

TSLINT_COMMAND = node_modules/.bin/tslint --project .

dependencies-installation: npm-dependencies-installation ## Install all dependencies required for project

npm-dependencies-installation: ## Install NPM dependencies
	npm install

lint: lint-ts ## Lint code style of entire project

lint-ts: ## Lint TypeScript code style with TSLint
	${TSLINT_COMMAND}

cs-fixes: cs-fixes-ts ## Fix code style of entire project

cs-fixes-ts: ## Fix TypeScript code style with TSLint
	${TSLINT_COMMAND} --fix

test: ## Run Jest tests
	node_modules/.bin/jest

test-with-coveralls-report: ## Run Jest tests and report coverage to Coveralls
	node_modules/.bin/jest --coverage --coverageReporters=text-lcov | node_modules/.bin/coveralls

help: ## View documentation for this Makefile
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
