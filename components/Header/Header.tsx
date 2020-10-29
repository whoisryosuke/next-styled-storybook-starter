import React, { memo } from 'react'
import styled from 'styled-components'
import { t } from '../../utils/getTheme'

const StyledHeader = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  padding: 8px;
  background: ${t('colors.white.off')};
  font-family: ${t('fonts.header')};
  font-size: ${t('fontSizes.2')};
`

interface Props {
  title?: string
}

export default memo(function Header({ title }: Props) {
  return <StyledHeader>{title ? title : 'Test'}</StyledHeader>
})
