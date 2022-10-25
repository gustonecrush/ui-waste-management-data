import axios from 'axios';
import React from 'react'
import styled from 'styled-components'

function Card({name, material, id}) {

  const handleDeleteType = async (e, id) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/api/types/${id}`);
  }

  return (
    <Card>
      <Name>{name}</Name>
      <BottomSection>
        <p>{material}</p>
        <Link href="" onClick={(e) => handleDeleteType(e, id)}>Hapus</Link>
      </BottomSection>
    </Card>
  )
}

export default Card

const Container = styled.div`
    background: #FFF;
    height: 100px;
    margin: 20px 30px 0 30px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`;

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    p {
        color: #9B9B9B;
    }
    margin-top: -5px;
`;

const Link = styled.a`
    color: #E99FAA;
    text-decoration: none;
`;

const Name = styled.h2`
    padding: 0 15px;
    margin: 20px 0 0 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #080808;
`;