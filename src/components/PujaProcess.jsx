import Step1 from "../assets/step1.svg"
import Step2 from "../assets/step2.svg"
import Step3 from "../assets/step3.svg"
import Step4 from "../assets/step4.svg"
import Step5 from "../assets/step5.svg"

import React from 'react'
import styled from 'styled-components'

function PujaProces() {
  return (
    <PUJAPROCESSCONTAINER>
    <div className='main'>
        <div className='puja_process_cont'>
            <h2>Puja Process</h2>
            <div className='puja_process_cards_cont'>
                <div className='puja_process_card'>
                    <div className='img_cont'>
                        <img src={Step1} alt="" />
                    </div>
                    <div className='text_cont'>
                        <h3>Select Puja</h3>
                        <p>Choose from puja packages listed below.</p>
                    </div>
                </div>
                <div className='puja_process_card'>
                    <div className='img_cont'>
                        <img src={Step2} alt="" />
                    </div>
                    <div className='text_cont'>
                        <h3>Add Offerings</h3>
                        <p>Enhance your puja experience with optional offerings like Gau Seva, Deep Daan, Vastra Daan, and Anna Daan.</p>
                    </div>
                </div>
                <div className='puja_process_card'>
                    <div className='img_cont'>
                        <img src={Step3} alt="" />
                    </div>
                    <div className='text_cont'>
                        <h3>Provide Sankalp details</h3>
                        <p>Enter your Name and Gotra for the Sankalp.</p>
                    </div>
                </div>
                <div className='puja_process_card'>
                    <div className='img_cont'>
                        <img src={Step4} alt="" />
                    </div>
                    <div className='text_cont'>
                        <h3>Puja Day Updates</h3>
                        <p>Our experienced pandits perform the sacred Puja. Receive the real time update of the Puja on your registered WhatsApp Number.</p>
                    </div>
                </div>
                <div className='puja_process_card'>
                    <div className='img_cont'>
                        <img src={Step5} alt="" />
                    </div>
                    <div className='text_cont'>
                        <h3>Puja Video & Prasad Delivery</h3>
                        <p>Get the puja video within 3-4 days on WhatsApp. Receive Tirth Prasad delivered to your doorstep within 8-10 days.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </PUJAPROCESSCONTAINER>
  )
}

export default PujaProces

const PUJAPROCESSCONTAINER= styled.div`
    
    .puja_process_cards_cont{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        margin-bottom: 50px;
    }
  .puja_process_cont {
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }
  .puja_process_cont > h2 {
    margin: 30px 0;
  }
  
  .puja_process_card {
    display: flex;
    /* margin-bottom: 20px; */
    gap: 15px;
    box-sizing: border-box;
  }

  .img_cont > img {
    width: 35px;
    height: auto;
  }
  .text_cont {
    flex: 1;
  }
  .text_cont h3 {
    margin-bottom: 15px;
    font-size: 18px;
  }
  .text_cont p {
    /* margin-bottom: 5px; */
    /* overflow: hidden;
    text-overflow: ellipsis; */
    color: gray;
  }

`
