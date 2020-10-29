import React, { memo } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  padding: 8px;
`

interface Props {
  title?: string
}

export default memo(function Header({ title }: Props) {
  return <StyledHeader>{title ? title : 'Test'}</StyledHeader>
})
