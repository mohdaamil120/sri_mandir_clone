import React from 'react'
import MidDay from "../assets/midday.webp"
import YourStory from "../assets/yourstory.webp"
import BW from "../assets/bw.webp"
import ABP from "../assets/abp.webp"
import styled from 'styled-components'

function MediaOutlets() {
    return (
    <MEDIACONTAINER>
    <div className='main'>
        <section>
            <h1>Our Divine Mission recognised by Prominent Media Outlets</h1>
            <div className='media_optiopns'>
                <div className='media_cont'>
                    <img src={MidDay} alt="" />
                </div>
                <div className='media_cont'>
                    <img src={YourStory} alt="" />
                </div>
                <div className='media_cont'>
                    <img src={BW} alt="" />
                </div>
                <div className='media_cont'>
                    <img src={ABP} alt="" />
                </div>
               
            </div>
        </section>
    </div>
    </MEDIACONTAINER>
  )
}

export default MediaOutlets


const MEDIACONTAINER = styled.div`

section{
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    /* padding-bottom: 70px; */
}
section > h1{
    font-size: 35px;
}

    .media_optiopns{
        padding-top: 60px;
        padding-bottom: 60px;
        display: flex;
        margin: auto;
        max-width: 1280px;
        gap: 40px;
    }
    .media_cont{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }
    .media_cont > img{
       width: 100%;
    }
`