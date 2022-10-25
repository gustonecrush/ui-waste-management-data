import React from 'react'
import styled from 'styled-components'

function InputForm({label, name, onChange, placeholder, type = "text", value}) {
  return (
    <Container>
        <Label for={name}>{label}</Label>
        <Input id={name} onChange={onChange} value={value} name={name} placeholder={placeholder} type={type} />
    </Container>
  )
}

export default InputForm

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

const Input = styled.input`
    height: 50px;
    border-radius: 10px;
    border: 1.5px solid #CACACA;
    margin-top: 10px;
    padding-left: 10px;
    font-size: 1.1rem;
`;
