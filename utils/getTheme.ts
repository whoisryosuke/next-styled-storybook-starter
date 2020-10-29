function getIndex(obj, i) {
  return obj[i]
}

export const getTheme = (token) => ({ theme }) => {
  return token.split('.').reduce(getIndex, theme)
}

export const t = getTheme
