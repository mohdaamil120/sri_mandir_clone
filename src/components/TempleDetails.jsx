import React from 'react'
import styled from 'styled-components'
import Mandir from "../assets/mandir_img.webp"

function TempleDetails() {
  return (
    <TEMPLEDETAILSCONTAINER>
    <div className='main'>
        <div className='temple_details_cont'>
            <h2>Shree Shanidev Temple, Shani Shingnapur, Maharashtra
            </h2>
            <div className='temple_detail'>
                <div className='img_cont'>
                    <img src={Mandir} alt="" />
                </div>      
                <div className='text_cont'>
                    <p>The Shani Shingnapur Temple is nestled in Ahmednagar, 65 kilometres away from Shirdi. Lord Shanidev is worshipped at this temple. The temple is believed to be a "jagrut devasthan", meaning that a deity still resides in the temple. According to mythological stories, about 300 years ago, a black stone was discovered near the Pansanala River. When the locals touched it with a stick, blood started oozing out of it. Later that night, Lord Shani appeared in the village head's dream, claiming it as his idol. Lord Shani had one condition that the stone shouldn't be enclosed, so the temple remains without walls or a roof to this day.
                    </p>
                    <p>Apart from the temple, Shingnapur is a small village known for the fact that there are no doors on any house in the entire village, yet there is no theft in the village. It is believed that the village is protected by Lord Shani, and thieves cannot steal in the protected village, and anyone who attempts theft receives divine punishment. Lord Shani bestows special blessings on the devotees who worship here.</p>
                </div>      
            </div>
        </div>
    </div>
    </TEMPLEDETAILSCONTAINER>
  )
}

export default TempleDetails

const TEMPLEDETAILSCONTAINER = styled.div`
    .temple_details_cont{
        width: 100%;
        max-width: 1280px;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 50px;
    }
    .temple_detail{
        display: flex;
        justify-content: center;
        gap: 45px;
        margin-top: 30px;
    }
    .temple_detail>div{
        width: 50%;
    }
    .img_cont>img{
        width: 100%;
        border-radius: 10px;
    }
    .text_cont{
        text-align: justify;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .text_cont>p{
        color: gray;
        font-size: 17px;
    }

`