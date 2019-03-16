workflow "Push checks" {
  on = "push"
  resolves = ["Tests", "Lint"]
}

action "Tests" {
  uses = "./.github"
  runs = "/tests.sh"
}

action "Lint" {
  uses = "./.github"
  runs = "/lint.sh"
}
