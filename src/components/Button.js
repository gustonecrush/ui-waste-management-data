import React from 'react'
import styled from 'styled-components'

function Button({label, type="button"}) {
  return (
    <Container type={type}>
      {label}
    </Container>
  )
}

export default Button

const Container = styled.button`
    background: #30ADE3;
    border: none;
    outline: none;
    margin: 0 30px;
    border-radius: 10px;
    height: 55px !important;
    font-size: 1.05rem;
    color: #FFF;
    box-shadow: #30ADE3 0px 8px 24px;
    cursor: pointer;
`;