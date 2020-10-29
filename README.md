# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [**Typescript**](https://www.typescriptlang.org/) for type safety
- [**ESLint**](https://eslint.org/) for linting
- [**Prettier**](https://prettier.io/) for formatting
- [**husky**](https://github.com/typicode/husky) for linting, typechecking and formatting with commit hooks
- [**Jest**](https://jestjs.io/) and [**react-testing-library**](https://testing-library.com/docs/react-testing-library/intro) for testing
- [**Styled Components**](https://styled-components.com/) for CSS-in-JS styling and theming
- [**Storybook**](https://storybook.js.org/) with a "theme getter" (`t("colors.white.1000")`)
- [**Google Fonts**](https://fonts.google.com) setup in NextJS app and Storybook
- [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) for easy commits that follow conventional standard.
- [**Semantic Release**](https://github.com/semantic-release/semantic-release) for automated app versioning


## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/whoisryosuke/next-styled-storybook-starter)

## How to use

1. Clone project: `git clone git@github.com:whoisryosuke/next-styled-storybook-starter.git`
2. Install dependencies: `yarn`

Now you have 2 main options:

- Run Storybook: `yarn storybook`
- Run the NextJS app: `yarn dev`

# Storybook

**Storybook** is used for developing components in isolation, providing integration testing, and creating documentation for components. It comes setup with Storybook Essentials (including **MDX docs**), as well Storybook **a11y** addon for accessibility testing.

## MDX Template

```mdx
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks'
import { Checkbox } from './Checkbox'

<Meta title="MDX/Checkbox" component={Checkbox} />

# Checkbox

With `MDX` we can define a story for `Checkbox` right in the middle of our Markdown documentation.

<Canvas>
  <Story name="all checkboxes">
    <form>
      <Checkbox id="Unchecked" label="Unchecked" />
      <Checkbox id="Checked" label="Checked" checked />
      <Checkbox appearance="secondary" id="second" label="Secondary" checked />
    </form>
  </Story>
</Canvas>
```

# Testing

## With Jest

`yarn test`

This project is setup with **Jest**, Jest **Snapshots**, and **react-testing-library**. This means you can **snapshot test** (save codified representation of components for comparison) and **unit test** component functionality (like clicking a button and verifying a result).

Test utilities are provided for convenience (see: `test/testUtils.ts`), like a custom render function to allow you to wrap tests in "providers" (like a theme for CSS-in-JS).

## With Typescript

`yarn type-check`

Runs the Typescript CLI for type checking. This also runs as a `pre-push` git hook to ensure code quality before pushing to remote servers.

# Git Commits

Git commits are "linted" (or checked) to ensure they follow conventional commit standards. To make this process easier, a commit script is included:

1. Stage some files using `git add` (or VSCode UI)
1. `yarn commit`

This runs the Commitzen CLI and walks you through writing a conventional commit (e.g. `feat(button): new focus ref`). It's much easier than remembering every type of commit (feat, build, bug, etc) and the right syntax. 

# CI / CD

This project is setup with a **Circle CI** configuration for testing commits to any branch, and releasing only commits to `master` and `beta` branches.

*Sample release flow:*

- Clone your repo (a fork of this one most likely)
- Create a new feature/bug/etc branch
- Make commits and push them to Github
- **This triggers a test in CI**
- Open a PR and merge the branch to `beta` branch for testing
- **This triggers a test *and* release in CI**
- Force push branch changes to master
- **This triggers a test *and* release in CI**