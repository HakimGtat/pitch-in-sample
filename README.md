# pitch-in-sample

> **Sample data.** This is a tiny throwaway library used to test a prototype called Pitch In. It is not a real project and nothing here is maintained.

`pitch-in-sample` is a few small text helpers: `slugify`, `truncate` and `wordCount`.

## Usage

```js
import { slugify, truncate, wordCount } from "./src/index.js";

slugify("Hello, World!");               // "hello-world"
truncate("The quick brown fox", 12);    // "The quick b…"
wordCount("  one two\nthree ");         // 3
```

## Develop

Needs Node 20 or newer, and no dependencies.

```
npm test
```

CI runs the same command on every push to `main` and on every pull request. See `PROJECT_BRIEF.md` for the project brief that coding agents read first.

Extra note added by the deliberately bad PR.
