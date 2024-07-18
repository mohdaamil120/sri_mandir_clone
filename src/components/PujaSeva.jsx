import React from 'react'
import EKADASHI1 from "../assets/ekadashi1.webp"
import EKADASHI2 from "../assets/ekadashi2.webp"
import EKADASHI3 from "../assets/ekadashi3.webp"
import Venue from "../assets/puja_venue.svg"
import Date from "../assets/puja_date.svg"

import styled from 'styled-components'

function PujaSeva() {
    return (
    <PUJASEVACONTAINER>
    <div className='main'>
        <section>
           <div className='heading_cont'>
                <h1>Puja Seva for you and your loved ones</h1>
                <p>Book Pujas in your and your family's name at 1000+ renowned temples in India.</p>
                <p>You will also recive a video of the Puja and Prasad along with divine blessings.</p>
                <button>View All Puja →</button>
           </div>
            <div className='pujaseva_optiopns'>
                <div className='pujaseva_cont'>
                    <div>
                        <img src={EKADASHI1} alt="" />
                    </div>
                    <div>
                        <p>DEVSHAYANI EKADASHI SPECIAL</p>
                        <div></div>
                    </div>
                    <div>
                        <h3>16,000 Brihaspati Graha Mool Mantra jaap & Sudarshan Havan</h3>
                        <p>To find an Ideal Partner and Relationship Bliss</p>
                    </div>
                    <div className='puja_date_venue'>
                        <div className='puja_details'>
                            <img src={Venue} alt="" />
                            <p>Shri Navagrah Shani Temple, Ujjain, Madhya Pradesh</p>
                        </div>
                        <div className='puja_details'>
                            <img src={Date} alt="" />
                            <p>17 July, Wednesday, Ashadha Shukla Saptami</p>
                        </div>
                        <div>
                            <button>PARTICIPATE  →</button>
                        </div>
                    </div>
                </div>
                <div className='pujaseva_cont'>
                    <div>
                        <img src={EKADASHI2} alt="" />
                    </div>
                    <div>
                        <p>DEVSHAYANI EKADASHI SPECIAL</p>
                        <div></div>
                    </div>
                    <div>
                        <h3>Pitru Dosha Nivaran Puja and Haridwar Ganga Abhishek Puja</h3>
                        <p>For Peace of Ancestor's souls and Resolving Family Disputes </p>
                    </div>
                    <div className='puja_date_venue'>
                        <div className='puja_details'>
                            <img src={Venue} alt="" />
                            <p>Pishach Mochan Kund and Ganga Ghat, Kashi, Haridwar</p>
                        </div>
                        <div className='puja_details'>
                            <img src={Date} alt="" />
                            <p>17 July, Wednesday, Ashadha Shukla Saptami</p>
                        </div>
                        <div>
                            <button>PARTICIPATE  →</button>
                        </div>
                    </div>
                </div>
                <div className='pujaseva_cont'>
                    <div>
                        <img src={EKADASHI3} alt="" />
                    </div>
                    <div>
                        <p>DEVSHAYANI EKADASHI SPECIAL</p>
                        <div></div>
                    </div>
                    <div>
                        <h3>Shri Baba Shyam Puja, Abhishek and Shringaar</h3>
                        <p>For Abundance of Wealth and Protection from Negative Energies</p>
                    </div>
                    <div className='puja_date_venue'>
                        <div className='puja_details'>
                            <img src={Venue} alt="" />
                            <p>Shri Khatu Shyam Temple, Haridwar, Uttarakhand</p>
                        </div>
                        <div className='puja_details'>
                            <img src={Date} alt="" />
                            <p>17 July, Wednesday, Ashadha Shukla Ekadashi</p>
                        </div>
                        <div>
                            <button>PARTICIPATE  →</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    </div>
    </PUJASEVACONTAINER>
  )
}

export default PujaSeva




const PUJASEVACONTAINER = styled.div`

section {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heading_cont {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
}

.heading_cont > h1 {
    font-size: 35px;
    margin-bottom: 15px;
}

.heading_cont > p {
    font-size: 20.5px;
    color: gray;
}

.heading_cont > button {
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    color: #F18912;
    margin-bottom: 15px;
    margin-top: 15px;
    &:hover{
        text-decoration: underline;
    }
}

.pujaseva_optiopns {
    display: flex;
    margin: auto;
    max-width: 1280px;
    gap: 40px;
}

.pujaseva_cont {
    width: 30%;
    border-radius: 7px;
    border: 1px solid lightgray;
    padding: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.pujaseva_cont > div:nth-child(1) > img {
    width: 100%;
    border-radius: 5px;
}

.pujaseva_cont > div:nth-child(2) > p {
    text-align: center;
    color: #D61F69;
    font-weight: bold;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.pujaseva_cont > div:nth-child(2) > div {
    background: linear-gradient(to right, #f8edf1, #D61F69, #f5cfde);
    height: 1px;
}

.pujaseva_cont > div:nth-child(3) > h3 {
    font-size: 21px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.pujaseva_cont > div:nth-child(3) > p {
    font-size: 14.5px;
}

.puja_details {
    display: flex;
    gap: 18px;
}

.puja_details > p {
    font-size: 15px;
}


.puja_date_venue > div > button {
    background-color: #00BD68;
    border: none;
    width: 100%;
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
}

.puja_date_venue {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: auto;
}
`;
