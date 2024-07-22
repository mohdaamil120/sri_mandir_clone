import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Modal = ({ selectedPackage,puja,show, onClose, price, onSubmit }) => {
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [name, setName] = useState('');
    const isFormValid = whatsappNumber.length >= 10 && name.length > 0;
    const navigate = useNavigate();

    if (!show) {
      return null;
    }
  
    const handleWhatsappChange = (e) => {
      const value = e.target.value;
      if (/^\d{0,10}$/.test(value)) { // Allow only numeric values up to 10 digits
          setWhatsappNumber(value);
      }
  };

  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 'f77f901a-c046-4e95-a8a1-af17a4a219fc'; // Replace with actual logic to get the user ID
    navigate(`/puja/cart/${puja.id}/${userId}`, { state: { price, name, whatsappNumber, puja,selectedPackage } });
  };

  
  return (
    <ModalOverlay>
      <ModalContent>
        
        <Title> 
          <Button onClick={onClose}>← </Button> Fill your details for Puja
        </Title>
        <div></div>
        <SubTitle>Enter Your Whatsapp Mobile Number</SubTitle>
        <Description>
          Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
        </Description>
        <form onSubmit={handleSubmit}>
          <Label>
             <FaWhatsapp className="icon" />               
             <span className="prefix">+91</span>
             <p className='placeholder1'>Your Mobile number</p> 
             <Input id='first_Input' inputMode="numeric"  maxLength="10"  type="text" required value={whatsappNumber} onChange={handleWhatsappChange}/>
          </Label>
          <Label>
            <h4>Enter Your Name</h4>
            <p className='placeholder2'>Your Mobile number</p>
            <Input type="text"  required value={name} onChange={handleNameChange}/>
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

  div{
    width: 390px;
    height: 1px;
    background-color: lightgray;
    margin-top: -10px;
    margin-bottom: 10px;
    margin-left: -15px;
  }

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
  position: relative;

  .placeholder1{
    font-size: 11px;
    font-weight: 400;
    color: gray;
    position: absolute;
    top: -4px;
    left: 10px;
    background-color: #FFFFFF;
  }
  .placeholder2{
    font-size: 11px;
    font-weight: 400;
    color: gray;
    position: absolute;
    top: 26px;
    left: 10px;
    background-color: #FFFFFF;
  }
  
  h4{
    margin-bottom: 10px;
  }

   #first_Input{
    padding-left: 80px;
    
   }
  .icon {
    position: absolute;
    left: 10px;
    top: 16px;
    color: #25D366;
    font-size: 20px;
  }

  .prefix {
    position: absolute;
    left: 36px;
    top: 15px;
    color: gray;
    font-weight: bold;
    font-size: 15px;
  }

`;


const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 12px;

  &:focus {
    outline: none; 
    border-color: #3795ec;
  }

`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.disabled ? '#E8E8E8' : 'orange')};
  color: ${props => (props.disabled ? 'gray' : 'white')};
  border: none;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
`;
















