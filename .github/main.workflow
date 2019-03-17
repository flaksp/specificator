workflow "Push checks" {
  on = "push"
  resolves = ["Tests", "Lint"]
}

action "Tests" {
  uses = "./.github"
  runs = "/test.sh"
}

action "Lint" {
  uses = "./.github"
  runs = "/lint.sh"
}
