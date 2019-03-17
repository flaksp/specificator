workflow "Push checks" {
  on = "push"
  resolves = ["Tests", "Lint"]
}

action "Tests" {
  uses = "./.github"
  runs = "/test.sh"
  env = {
    COVERALLS_SERVICE_NAME = "github-actions"
  }
  secrets = ["COVERALLS_REPO_TOKEN"]
}

action "Lint" {
  uses = "./.github"
  runs = "/lint.sh"
}
