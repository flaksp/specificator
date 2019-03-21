workflow "Check code quality" {
  on = "push"
  resolves = ["lint/tslint", "test/jest"]
}

workflow "Publish new release" {
  on = "release"
  resolves = ["deploy/npm"]
}



action "lint/tslint" {
  uses = "./.github"
  runs = "/lint.sh"
}

action "test/jest" {
  uses = "./.github"
  runs = "/test.sh"
  env = {
    COVERALLS_SERVICE_NAME = "github-actions"
  }
  secrets = ["COVERALLS_REPO_TOKEN"]
}

action "deploy/npm" {
  needs = ["test/jest"]
  uses = "./.github"
  runs = "/publish-to-npm.sh"
  secrets = ["NPM_TOKEN"]
}

