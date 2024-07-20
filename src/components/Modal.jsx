import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = ({ show, onClose, price, onSubmit }) => {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [name, setName] = useState('');
    const isFormValid = whatsappNumber.length >= 10 && name.length > 0;
  
    if (!show) {
      return null;
    }
  
    const handleWhatsappChange = (e) => {
      setWhatsappNumber(e.target.value);
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };

  return (
    <ModalOverlay>
      <ModalContent>
        
        <Title> <Button onClick={onClose}>← </Button> Fill your details for Puja</Title>
        <div></div>
        <SubTitle>Enter Your Whatsapp Mobile Number</SubTitle>
        <Description>
          Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
        </Description>
        <form onSubmit={onSubmit}>
          <Label>
             <Input type="text" placeholder="Your mobile Number" required value={whatsappNumber} onChange={handleWhatsappChange}/>
          </Label>
          <Label>
            Enter Your Name
            <Input type="text" placeholder="Your full Name" required value={name} onChange={handleNameChange}/>
          </Label>
          <SubmitButton type="submit" disabled={!isFormValid}>Next</SubmitButton>
        </form>
        {/* <PackagePrice>Price: {price}</PackagePrice> */}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const Button=styled.span`
    cursor: pointer;
    font-size: 25px;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  width: 380px;
  position: relative;
  /* text-align: center; */

  div{
    width: 390px;
    height: 1px;
    background-color: lightgray;
    margin-top: -10px;
    margin-bottom: 10px;
    margin-left: -15px;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const SubTitle = styled.h4`
  margin-bottom: 10px;
  
`;

const Description = styled.p`
  font-size: 12px;
  margin-bottom: 20px;
  color: gray;
  line-height: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bolder;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

const PackagePrice = styled.p`
  margin-top: 20px;
  font-weight: bold;
  color: #D61F69;
`;















