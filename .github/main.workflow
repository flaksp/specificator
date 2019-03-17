workflow "Push checks" {
  on = "push"
  resolves = ["Lint", "Tests with coverage"]
}

action "Lint" {
  uses = "./.github"
  runs = "/lint.sh"
}

action "Tests with coverage" {
  uses = "./.github"
  runs = "/test-with-coveralls-report.sh"
  env = {
    COVERALLS_SERVICE_NAME = "github-actions"
  }
  secrets = ["COVERALLS_REPO_TOKEN"]
}

workflow "Publish to NPM" {
  on = "release"
  resolves = ["Publish"]
}

action "Tests" {
  uses = "./.github"
  runs = "/test.sh"
}

action "Publish" {
  needs = ["Tests"]
  uses = "./.github"
  runs = "/publish-to-npm.sh"
  secrets = ["NPM_TOKEN"]
}
