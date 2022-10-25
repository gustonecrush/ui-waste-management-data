import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button';
import Header from '../components/Header';
import InputForm from '../components/Input';
import SelectForm from '../components/Select';

function InputSampah() {

  const [materials, setMaterials] = useState([]);
  const [material_id, setMaterialID] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const fetchMaterials = async() => {
    try {
        const { data } = await axios.get(
            `http://localhost:8000/api/materials`
        );
        setMaterials(data.materials);
    } catch (error) {
        setError(error.message);
    }
  }

  const handleResetForm = () => {
    setMaterialID("");
    setName("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const type = { material_id, name };

    const data = new FormData();
    data.append("material_id", material_id);
    data.append("name", name);

    axios.post("http://localhost:8000/api/types", data, {
        header: {
            "Content-Type": `multipart/form-data; charset-utf-8; boundary=${Math.random()
            .toString()
            .substr(2)}`,
        }
    }).then((res) => {
        console.warn(res);
    })

    handleResetForm();
    console.log("success!");
    window.location.href = '/';
  }

  const handleChangeMaterialID = (e) => {
    setMaterialID(e.target.value);
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    fetchMaterials();
  }, [])

  return (
    <Container>
        <Header title={"Input Sampah"} />
        <Form onSubmit={handleSubmit}>
            <SelectForm label={"Kategori Sampah"} onChange={handleChangeMaterialID} value={material_id} name={"material_id"} placeholder={"Kategori"} datas={materials} />
            <InputForm label={"Nama Sampah"} onChange={handleChangeName} value={name} name={"name"} placeholder={"Nama Sampah"} />
            <Button label={"Simpan"} type={"submit"} />
        </Form>
    </Container>
  )
}

export default InputSampah

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 750px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: #FFF;
    border-radius: 25px;
    margin: 10vh auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
