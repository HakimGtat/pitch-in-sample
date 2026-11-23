# Project brief: pitch-in-sample

> Sample data, written to the Pitch In project-brief template.

## What the project does

A tiny text-utilities library with three pure functions: `slugify` (text to a URL slug), `truncate` (shorten text with a suffix) and `wordCount` (count words). It is a throwaway repo for testing the Pitch In prototype. It has no users.

## Stack and versions

- JavaScript (ES modules, `"type": "module"`), Node 20 or newer (CI uses Node 22)
- Node's built-in test runner (`node:test`). No dependencies, no build step.

## Setup and test commands

```
npm test
```

There is nothing to install. `npm test` runs `node --test`, which finds every `*.test.js` file.

## Repo map

- `src/`: one file per function (`slugify.js`, `truncate.js`, `wordCount.js`) and `index.js`, which re-exports them
- `tests/`: one `*.test.js` file per source file
- `.github/workflows/ci.yml`: CI, runs `npm test`
- `README.md`: usage examples

## Conventions

- Naming: camelCase functions, one exported function per file, file named after the function.
- Formatting: 2 spaces, double quotes, semicolons, trailing newline.
- Errors: invalid arguments throw a `RangeError` or `TypeError` with a short message. Plain text input is converted with `String(input)`.
- Docs: every exported function has a short JSDoc comment with one example.
- Tests: use `node:test` and `node:assert/strict`. Test names are full sentences starting with the function name.
- Commits: one short imperative line, for example `Add readingTime helper`.

## Definition of done

- `npm test` passes.
- New behaviour has tests; changed behaviour has updated tests.
- New exports are added to `src/index.js` and have a short example in `README.md` when they are public.
- No new dependencies.
