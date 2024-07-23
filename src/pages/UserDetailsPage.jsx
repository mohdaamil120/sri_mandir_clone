
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { FaPhone ,FaWhatsapp, FaInfoCircle ,FaArrowRight, FaArrowLeft, FaAngleDown, FaAngleUp} from 'react-icons/fa';

function UserDetailsPage() {
    
    const location = useLocation();
    const { whatsappNumber, puja, selectedPackage } = location.state || {};
    const [whatsappNo, setWhatsappNo] = useState(whatsappNumber);
    const [useDifferentNumber, setUseDifferentNumber] = useState("");
    const [isDifferentNumberChecked, setIsDifferentNumberChecked] = useState(false);
    const [differentNumber, setDifferentNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [thirdName, setThirdName] = useState('');
    const [fourthName, setFourthName] = useState('');
    const [gotra, setGotra] = useState('');
    const [unknownGotra, setUnknownGotra] = useState(false);
    const [wantPrasad, setWantPrasad] = useState(null);
    const [expandedCard, setExpandedCard] = useState(false)
    const [pincode, setPincode] = useState('');
    const [cityName, setCityName] = useState('');
    const [stateName, setStateName] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [roadNo, setRoadNo] = useState('');
    const [landmark, setLandmark] = useState('');
    
    const toggleReadMore= ()=>{
        setExpandedCard(prev => !prev);
    }


  const handleUnknownGotraChange = () => {
    setUnknownGotra(!unknownGotra);
    setGotra(!unknownGotra ? 'Kashyap' : '');
  };

  const handleProcedToBook = () => {
        
  };

  return (
    <USERDETAILSCONTAINER>
      <h3> <FaArrowLeft id='leftArror'/> Enter details for your puja</h3>
      <hr style={{marginBottom:"15px"}}/>
      <div id='mainPageData'>
        <div className="form-section">
            <div className="input-group">
            <label>Your WhatsApp Number</label>
            <p className='para'>Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.</p>
            <div className="input-with-icon">
                <Label>
                    <FaWhatsapp className="icon" />               
                    <span className="prefix">+91</span>
                    <p className='placeholder1'>Your Mobile number</p> 
                    <Input id='first_Input' inputMode="numeric"  maxLength="10"  type="text" required value={whatsappNo}  onChange={(e) => setWhatsappNo(e.target.value)}/>
                </Label>
            </div>
            <div className="checkbox-group">
                <input
                    type="checkbox"
                    checked={isDifferentNumberChecked}
                    onChange={() => setIsDifferentNumberChecked(!isDifferentNumberChecked)}
                />
                <label>I have a different number for calling</label>
                </div>

                {isDifferentNumberChecked && (
                    <div className="input-with-icon">
                        <Label>  
                            <FaPhone style={{position:"absolute", top:"15px", left:"10px"}}/>          
                            <span className="prefix">+91</span>
                            <p className='placeholder1'>Your Mobile number</p> 
                            <Input id='first_Input' 
                                inputMode="numeric"  
                                maxLength="10"  
                                type="text" 
                                required 
                                value={differentNumber}  
                                onChange={(e) => setDifferentNumber(e.target.value)}
                            />
                        </Label>
                    </div>
                )}
            </div>
            <div className='hrline'></div>

            <div className="input-group">
            <label>Name of members participating in Puja</label>
            <div >
                <input
                    type="text"
                    placeholder="First member name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Second member name"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Third member name"
                    value={thirdName}
                    onChange={(e) => setThirdName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Fourth member name"
                    value={fourthName}
                    onChange={(e) => setFourthName(e.target.value)}
                />
            </div>
            </div>
            <div className='hrline'></div>

            <div className="input-group">
            <label>Fill participant's gotra</label>
            <div className="input-with-icon">
                <input
                type="text"
                placeholder="Gotra"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
                disabled={unknownGotra}
                />
                <FaInfoCircle />
            </div>
            <div className="checkbox-group">
                <input
                type="checkbox"
                checked={unknownGotra}
                onChange={handleUnknownGotraChange}
                />
                <label>I do not know my gotra</label>
            </div>
            </div>
            <div className='hrline'></div>

            <div id='puja_prasad' className="input-group">
               <div>
                    <label>Do you want to get puja prasad?</label>
                    <p>Prasad of workship will be sent within 8-10 days after completion of puja</p>
               </div>
                <div className="button-group">
                    <button
                    type="button"
                    className={wantPrasad === 'yes' ? 'active' : ''}
                    onClick={() => setWantPrasad('yes')}
                    >
                    Yes
                    </button>
                    <button
                    type="button"
                    className={wantPrasad === 'no' ? 'active' : ''}
                    onClick={() => setWantPrasad('no')}
                    >
                    No
                    </button>
                </div>
            </div>

                {wantPrasad === 'yes' && (
                <div className="address-inputs">
                    <input type="text" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    <input type="text" placeholder="City Name" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                    <input type="text" placeholder="State Name" value={stateName} onChange={(e) => setStateName(e.target.value)} />
                    <input type="text" placeholder="House No" value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
                    <input type="text" placeholder="Road No" value={roadNo} onChange={(e) => setRoadNo(e.target.value)} />
                    <input type="text" placeholder="Landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                </div>
                )}
            <button onClick={handleProcedToBook}>Proceed to book</button>
        </div>
        <div className='vertical_line'></div>
        <BookingDetails>
                        <BookingItem>
                        <p>
                            {!expandedCard ? (
                                <>
                                <h4> {`${puja.title} ${puja.description} ${puja.purpose}`.substring(0, 40) + '...'}</h4>
                                <p> {selectedPackage.name}</p>
                                </>
                            ) : (
                                <>
                                <h4> {`${puja.title} ${puja.description} ${puja.purpose}`}</h4>
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
                        <button id='toggleButton' onClick={() => toggleReadMore()}>
                            {!expandedCard  ?  <FaAngleDown/> : <FaAngleUp/>}
                        </button>
                        </BookingItem>                           

        </BookingDetails>
      </div>
    </USERDETAILSCONTAINER>
  );
}

export default UserDetailsPage;


const BookingDetails = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  max-height: 400px; 
  height: auto;
  
`;

const BookingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
 
  #toggleButton{
    border: none;
    background: transparent;
    font-size: 20px;
    color: #1580E3;
     margin-left: 10px;
  }
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

const USERDETAILSCONTAINER = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  overflow-y: auto;

  #mainPageData{
    display: grid;
    grid-template-columns: repeat(3, 940px auto 335px);
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  #leftArror{
    margin-right: 10px;
  }

  .form-section {
    display: flex;
    flex-direction: column;
  }

  .input-group {
    margin-bottom: 20px;
    label {
      display: block;
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: bold;
    }
    .para{
        color: gray;
    }
    .input-with-icon {
        margin-top: 20px;
    }
    .checkbox-group,
    .radio-group {
      display: flex;
      align-items: center;
      label {
        /* margin-left: 5px; */
        font-size: 15px;
        color: gray;
        font-weight: 400;
      }

      #second_Input{
        padding-left:80px; 
      }
    }

    div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px 15px;
    }
    div>input{
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 12px;

        &:focus {
            outline: none; 
            border-color: #3795ec;
        }
    }
  }

  button {
    padding: 10px 20px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  .hrline{
    width: 100%;
    height: 10px;
    margin: auto;
    background-color: #F9F8FD;
    margin-bottom: 15px;
  }

  .vertical_line{
    height: 100%;
    width: 1px;
    background-color: lightgray;
  }
  

  #puja_prasad{
    display: flex;
    justify-content: space-between;
  }

  #puja_prasad>div:nth-child(1){
    display: flex;
    flex-direction: column;
    p{
        margin-top: -20px;
        color: gray;
    }
  }

  .button-group {
    display: flex;
    gap: 20px;
    button {
      padding: 0px 30px;
      background-color: #F9F8FD;
      color: black;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      &.active {
        background-color: orange;
        color: white;
      }
    }
  }

  .address-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    input {
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 12px;
      &:focus {
        outline: none; 
        border-color: #3795ec;
      }
    }
  }

`;

