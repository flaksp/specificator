workflow "Check code quality" {
  on = "push"
  resolves = ["lint/tslint", "lint/markdownlint"]
}

workflow "Publish new release" {
  on = "release"
  resolves = ["deploy/npm"]
}

action "dependencies/npm" {
  uses = "docker://node:8.16.0-alpine"
  runs = "npm"
  args = ["install"]
}

action "lint/markdownlint" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/markdownlint", "*.md", "docs/*.md"]
}

action "lint/tslint" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/tslint", "--project", "."]
}

action "app/build" {
  needs = [
    "dependencies/npm"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/tsc"]
}

action "deploy/npm" {
  needs = [
    "dependencies/npm",
    "app/build"
  ]
  uses = "docker://node:8.16.0-alpine"
  args = ["node_modules/.bin/npm-publish-git-tag"]
  runs = ["sh", "-c", "apk add --upgrade git && node_modules/.bin/npm-publish-git-tag"]
  secrets = ["NPM_TOKEN"]
}
