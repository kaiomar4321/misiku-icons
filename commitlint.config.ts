// commitlint.config.js
export const commitLintConfig = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ["@commitlint/config-conventional"],
    /*
     * Resolve and load @commitlint/format from node_modules.
     * Referenced package must be installed
     * Show the errors in a human-friendly format
     */
    formatter: "@commitlint/format",
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
      "subject-max-length": [2, "always", 100],
      "subject-case": [2, "never"],
      "scope-empty": [2, "never"],
      "scope-case": [2, "never"],
      "type-enum": [
        2,
        "always",
        [
          "build",
          "chore",
          "ci",
          "docs",
          "feat",
          "fix",
          "perf",
          "refactor",
          "revert",
          "style",
          "test",
        ],
      ],
      "scope-enum": [
        2,
        "always",
        [
          "api",
          "components",
          "config",
          "constants",
          "controllers",
          "dependencies",
          "documentation",
          "extensions",
          "lifecycles",
          "middlewares",
          "plugins",
          "readme",
          "routes",
          "schemas",
          "services",
          "styles",
          "testing",
          "types",
          "utils",
        ],
      ],
    },
    /*
     * Array of functions that return true if commitlint should ignore the given message.
     */
    ignores: [(commit: string) => commit === ""],
    /*
     * Whether commitlint uses the default ignore rules, see the description above.
     */
    defaultIgnores: true,
    /*
     * Custom URL to show upon failure
     */
    helpUrl:
      "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
    /*
     * Custom prompt configs
     */
    prompt: {
      messages: {},
      questions: {
        type: {
          description: "please input type:",
        },
      },
    },
  };  