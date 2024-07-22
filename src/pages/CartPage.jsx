import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheckCircle, FaRegCircle, FaArrowRight, FaMoneyBillWave, FaCalendarAlt, FaUser } from 'react-icons/fa';
import Back_Arrow from "../assets/back_arrow.svg"
import { FaLongArrowAltRight,FaAngleUp,FaAngleDown,FaAngleRight } from "react-icons/fa";
import VastrDaan from "../assets/vastr_daan.webp"
import AnnDaan from "../assets/Ann daan.webp"
import DeepDaan from "../assets/deep_daan.webp"
import CowSewa from "../assets/cow_sewa.webp"

const CartPage = () => {
  const [expandedCard, setExpandedCard] = useState(false)
  const { packageId, userId } = useParams();
  const location = useLocation();
  const { price, name, whatsappNumber, puja,selectedPackage } = location.state || {}; // Destructure state

  const toggleReadMore= ()=>{
    setExpandedCard(prev => !prev);
  }

  return (
    <DIV>
        <Header>
        <Step active={true}>
        <StepIcon active={true}>
            <FaCheckCircle />
        </StepIcon>
        <StepLabel active={true}>Add Details</StepLabel>
        </Step>
         <p>»</p>
        <Step active={true}>
        <StepIcon active={true}>
            <FaCheckCircle />
        </StepIcon>
        <StepLabel active={true}>Review Booking</StepLabel>
        </Step>
        <p>»</p>
        <Step>
        <StepIcon>
            <FaRegCircle />
        </StepIcon>
        <StepLabel>Fill Name, Gotra & Address</StepLabel>
        </Step>
        <p>»</p>
        <Step>
        <StepIcon>
            <FaRegCircle />
        </StepIcon>
        <StepLabel>Make Payment</StepLabel>
        </Step>
        </Header>
        <h3><img src={Back_Arrow} alt="" /> Review Booking</h3>
        <div className='line'></div>
        <Container>
            <div className='Booking_details'>
                <BookingDetails>
                    <BookingItem>
                    <p>
                        {!expandedCard ? (
                            <>
                            <h4> {`${puja.title} ${puja.description} ${puja.purpose}`.substring(0, 40) + '...'}</h4>
                            <p> {selectedPackage.name}</p>
                            <p> {selectedPackage.price}</p>
                            </>
                        ) : (
                            <>
                            <h4> {`${puja.title} ${puja.description} ${puja.purpose}`.substring(0, 40) + '...'}</h4>
                            <p> {selectedPackage.name}</p>
                            <p> {selectedPackage.price}</p>
                            <br /> 
                            <hr style={{ border: 'none', borderTop: '1px dotted gray', marginBottom:"20px"}} />
                            <span>
                                <img src={puja.venueImage} alt="" /> {puja.venue}
                            </span>
                            <br /> 
                            <span>
                                <img src={puja.dateImage} alt="" /> {puja.date}
                            </span>
                            </>
                        )}
                    </p>
                    <button onClick={() => toggleReadMore()}>
                        {!expandedCard  ?  <FaAngleDown/> : <FaAngleUp/>}
                    </button>
                    </BookingItem>                           

                </BookingDetails>
                <BookingDetails>
                    <BookingItem>
                    <BookingLabel className='coupon'>Apply Coupon</BookingLabel>
                    <BookingValue>
                    <FaAngleRight className='coupon'/> 
                    </BookingValue>
                    </BookingItem>                          
                </BookingDetails>
                <div className='hrline'></div>
                <BillDetails>
                    <h3>Bill details</h3>
                    <BillItem>
                    <BillLabel>{selectedPackage.name}</BillLabel>
                    <BillValue>{selectedPackage.price}</BillValue>
                    </BillItem>
                    <hr style={{ border: 'none', borderTop: '1px dotted gray'}} />
                    <BillItem>
                    <BillLabel>Total Amount</BillLabel>
                    <BillValue>{selectedPackage.price}</BillValue>
                    </BillItem>
                    <hr  />
                    <ButtonContainer>
                        <div>
                            <p>{selectedPackage.price}</p>
                            <p>{selectedPackage.name}</p>
                        </div>
                        <div><Button>Continue <FaLongArrowAltRight className="icon" /></Button></div>
                    </ButtonContainer>
                </BillDetails>
            </div>
            <div className='vertical_line'></div>
            <div className='extra_offer'>
                <OfferItem>
                <OfferTitle>Vastra Daan (Offering Clothes to the Needy)</OfferTitle>
                <OfferImage src={VastrDaan} alt="Vastra Daan" />
                <OfferDescription>Vastra Daan is a virtuous deed that symbolises compassion and generosity towards those in need. This act of donating clothes will be done in your name at an orphanage or old age home.</OfferDescription>
                <OfferPrice>₹ 1051</OfferPrice>
                <AddButton>+ Add</AddButton>
                </OfferItem>
                <OfferItem>
                <OfferTitle>Gau Seva (Care and Service for Cows)</OfferTitle>
                <OfferImage src={CowSewa}alt="Gau Seva" />
                <OfferDescription>The highly meritorious act of providing care and service to cows is seen as a way of connecting with the divine, fulfilling one's moral duty, and a means to attain salvation. After the puja, service to Gau Mata will be done in your name.</OfferDescription>
                <OfferPrice>₹ 351</OfferPrice>
                <AddButton>+ Add</AddButton>
                </OfferItem>
                <OfferItem>
                <OfferTitle>Deep Daan (Offering of Lamps)</OfferTitle>
                <OfferImage src={DeepDaan} alt="Deep Daan" />
                <OfferDescription>Deep Daan is a virtuous deed that symbolises compassion and generosity towards those in need. This act of donating lamps will be done in your name at a temple or ashram.</OfferDescription>
                <OfferPrice>₹ 251</OfferPrice>
                <AddButton>+ Add</AddButton>
                </OfferItem>
            </div>
        </Container>
    </DIV>
  );
};

export default CartPage;

const DIV= styled.div`
     .line{
    height: 1px;
    margin: 0px 0px 20px 0px;
    background-color: lightgray;
    margin-bottom: 25px;
    margin-top: 20px;
  }
`

const ButtonContainer = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
background-color: #00BD68;
padding: 5px 20px;
border-radius: 10px;
cursor: pointer;
p{
    font-weight: bold;
}

`
const Button = styled.button`
  padding: 10px 20px;
  background: transparent;
  font-weight: bold;
  font-size: 18px;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon{
    margin-left: 10px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 520px 20px 400px);
  gap: 30px;

  h3{
    display: flex;
    margin: 15px 0px;
  }
  h3>img{
    margin-right: 10px;
  }

 
  .vertical_line{
    height: 100%;
    width: 1px;
    background-color: lightgray;
  }
  .hrline{
    width: 100%;
    height: 10px;
    margin: auto;
    background-color: #F9F8FD;
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #F3F4F6;
  padding: 20px 0px;

  p{
    position:relative;
    right: 10px;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const StepIcon = styled.span`
  font-size: 18px;
  margin-right: 5px;
  color: ${props => props.active ? 'green' : '#ccc'};
`;

const StepLabel = styled.span`
  font-size: 14px;
  color: ${props => props.active ? '#000' : '#ccc'};
`;

const BookingDetails = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const BookingTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const BookingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  button{
    border: none;
    background: transparent;
    font-size: 20px;
    color: #1580E3;
  }
  .coupon{
    color: #1580E3;
  }
`;

const BookingLabel = styled.span`
  font-weight: bold;
`;

const BookingValue = styled.span``;

const BillDetails = styled.div`
  /* border: 1px solid #ccc; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const BillLabel = styled.span`
  font-weight: bold;
`;

const BillValue = styled.span`
  font-weight: bold;
`;



const OfferItem = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OfferTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const OfferDescription = styled.p`
  margin-bottom: 10px;
`;

const OfferPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const OfferImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;





