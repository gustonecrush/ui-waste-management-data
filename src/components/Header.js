import React from 'react'
import styled from 'styled-components';

function Header({title}) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background: #0C325F;
    width: 100%;
    height: 100px;
    border-radius: 25px 25px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    h1 {
        color: #FFF;
        font-size: 1.3rem;
        font-weight: 600;
    }
`;
