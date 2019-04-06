workflow "Check code quality" {
  on = "push"
  resolves = ["lint/tslint", "lint/markdownlint"]
}

workflow "Publish new release" {
  on = "release"
  resolves = ["deploy/npm"]
}

action "lint/markdownlint" {
  uses = "./.github"
  runs = "/markdownlint.sh"
}

action "lint/tslint" {
  uses = "./.github"
  runs = "/tslint.sh"
}

action "deploy/npm" {
  needs = ["test/jest"]
  uses = "./.github"
  runs = "/publish-to-npm.sh"
  secrets = ["NPM_TOKEN"]
}

