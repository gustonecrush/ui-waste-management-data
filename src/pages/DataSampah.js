import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import Button from '../components/Button';
import Header from '../components/Header';

function DataSampah() {

  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  const fetchTypes = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/types`
      );
      setTypes(data.types)
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchTypes();
  }, []);

  const handleDeleteType = async (e, id) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8000/api/types/${id}`);
    const fileteredTypes = types.filter((item) => item.id !== id);
    setTypes(fileteredTypes);
  }

  console.log(types)

  return (
    <Container>
        <Header title="Data Sampah" />
        <LinkTambahData href="/input-sampah">
          <Button label="Tambah" type="button" />
        </LinkTambahData>
        
        <ScrollView>
          {
            types.map((type) => (
              <Card>
                <Name>{type?.name}</Name>
                <BottomSection>
                  <p>{type?.material[0].name}</p>
                  <Link href="" onClick={(e) => handleDeleteType(e, type?.id)}>Hapus</Link>
                </BottomSection>
              </Card>
            ))
          }
        </ScrollView>
    </Container>
  )
}

export default DataSampah

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    width: 450px;
    height: 750px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: #EEEEEE;
    border-radius: 25px;
    margin: 10vh auto;
    padding-bottom: 20px;
    flex-wrap: no-wrap;
`;

const ScrollView = styled.div`
  overflow: auto;
  position: relative;
`;

const Card = styled.div`
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

const LinkTambahData = styled.a`
  display: flex;
  text-decoration: none;
  flex-direction: column;
`;