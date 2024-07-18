import React from 'react'
import Hands from "../assets/hands.svg"
import Star from "../assets/star.svg"
import CD from "../assets/CD.svg"
import Fire from "../assets/fire.svg"
import styled from 'styled-components'

function Testimonial() {
    return (
    <TESTIMONIALCONTAINER>
    <div className='main'>
        <section>
           <div className='left_cont'>
                <h3>Trusted by Over 20 Million Devotees in India and 100,000+ NRIs.</h3>
                <h1>India's Most Loved Devotional App</h1>
                <p>We are on a mission to assist a billion Indians in their spiritual and devotional journey and guide them on the path towards feeling happy, peaceful, and content.</p>
           </div>
           <div className='right_cont'>
                <div>
                    <img src={Hands} alt="" />
                    <h2>2 Crore+ Devotees</h2>
                    <p>Have trusted us in their devotional journey</p>
                </div> 
                <div>
                    <img src={Star} alt="" />
                    <h2>4.6 star rating</h2>
                    <p>Over 1 Lakh devotees express their love for us on playstore</p>
                </div> 
                <div>
                    <img src={CD} alt="" />
                    <h2>5000+ Music Collection</h2>
                    <p>Listen to your favourite Bhajans, Chalisa, Mantra and Aarti AD-Free</p>
                </div> 
                <div>
                    <img src={Fire} alt="" />
                    <h2>250K+ Successful Pooja Services</h2>
                    <p>Millions of devotees have commenced Pooja at famous temples of India with us to seek God's grace.</p>
                </div> 
           </div>
        </section>
    </div>
    </TESTIMONIALCONTAINER>
  )
}

export default Testimonial




const TESTIMONIALCONTAINER = styled.div`
.main{
    background: linear-gradient(to right, #121F36, #152D58);
}
section {
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    /* margin-bottom: 60px; */
    color: white;
    gap: 80px;
}
section > div {
    width: 50%
}

.left_cont{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.left_cont > h3{
 color: #72A0F1;
}
.left_cont > h1{
  font-size: 36px;
}
.left_cont > p{
  font-size: 20px;
}

.right_cont{
    display: grid;
    grid-template-columns: repeat(2 ,1fr);
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 35px;
    text-align: left;
}
.right_cont >div>p{
    color: #B3B3B3;
}

`;
