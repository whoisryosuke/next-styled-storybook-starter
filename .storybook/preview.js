import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from "../themes/light"

export const decorators = [(Story) => <ThemeProvider theme={theme}><Story/></ThemeProvider>];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
