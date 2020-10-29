# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [**Typescript**](https://www.typescriptlang.org/) for type safety
- [**ESLint**](https://eslint.org/) for linting
- [**Prettier**](https://prettier.io/) for formatting
- [`**husky**`](https://github.com/typicode/husky) for linting, typechecking and formatting with commit hooks
- [**Jest**](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro) for testing
- [**Styled Components**](https://styled-components.com/) for CSS-in-JS styling and theming
- [**Storybook**](https://storybook.js.org/) with a "theme getter" (`t("colors.white.1000")`)
- [**Google Fonts**](https://fonts.google.com) setup in NextJS app and Storybook
- [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) for easy commits that follow conventional standard.
- [**Semantic Release**](https://github.com/semantic-release/semantic-release) for automated app versioning


## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
# or
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Storybook

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
