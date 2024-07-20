import React from 'react'
import styled from 'styled-components'

function AboutPuja() {
  return (
    <ABOUTPUJACONTAINER>
    <div className='main'>      
        <div className='about'>
            <h1>Saturday Shani Shingnapur Special Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek for Prevention of Misfortunes and Adversities</h1>
            <p>The Shani Shingnapur Temple in Maharashtra is considered the world's biggest Shani temple. This temple of Lord Shani is known as the 'Jagrut Devasthan', meaning Shani Dev himself resides here in the form of a stone idol. According to religious beliefs, performing Shani Puja and offering Til Tel at this ancient temple can provide relief from the effects of Shani Saade Saati. Shani Saade Saati is often considered unfavourable, with its impact divided into three phases of two and a half years each. During the initial phase of Saade Saati, Shani affects the mind of an individual which may cause financial and emotional challenges. The second phase of Saade Saati is considered the most challenging which can bring physical troubles. Its consequences can also affect an individual's family and professional life.
            </p>
            <p>In the final phase of Shani Saade Saati, a person may face various struggles, affecting them physically, mentally, and financially. Various types of worship are performed to reduce the malefic effects of Lord Shani, among which Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek are extremely effective. Just as each deity has a special day, Saturday is dedicated to Lord Shani, and on this day, performing the Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek are considered highly fruitful. Therefore, participate in this puja through Sri Mandir and attain the special grace of Lord Shani.</p>
        </div>
    </div>
    </ABOUTPUJACONTAINER>
  )
}

export default AboutPuja

const ABOUTPUJACONTAINER = styled.div`
    .about{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1280px;
        margin: auto;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        
    }
    
    .about >h1{
        font-size: 23px;
    }
    .about >p{
        color: gray;
        text-align: justify;
    }
`