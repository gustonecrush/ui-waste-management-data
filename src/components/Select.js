import React from 'react'
import styled from 'styled-components'

function SelectForm({label, name, onChange, placeholder = "Kategori", datas, value}) {
  return (
    <Container>
      <Label for={name}>{label}</Label>
      <Select name={name} value={value} onChange={onChange}>
        <Option value="" readonly>Kategori</Option>
        {
            datas.map((material) => (
                <Option value={material?.id} key={material?.id}>{material?.name}</Option>
            ))
        }
      </Select>
    </Container>
  )
}

export default SelectForm

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    margin-bottom: 20px;
`;

const Label = styled.label`
    color: #8B8B8B;
    font-size: 0.95rem;
`;

const Select = styled.select`
    height: 57px;
    border-radius: 10px;
    border: 1.5px solid #CACACA;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 2rem !important;
    font-size: 1.1rem;
`;

const Option = styled.option`
    padding-right: 2rem;
`;

