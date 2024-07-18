import React from 'react'
import Bell from "../assets/bell.svg"
import Book from "../assets/book.svg"
import MusicIcon from "../assets/musicIcon.svg"
import StarIcon from "../assets/staricon.svg"
import Icon from "../assets/iconofpuja.svg"
import Om from "../assets/om.svg"
import styled from 'styled-components'

function Features() {
    return (
    <FEATURESCONTAINER>
    <div className='main'>
        <section>
           <div className='top_cont'>
                <h1>One App for all your devotional needs</h1>
                <p>Sri Mandir brings these amazing features for you, get these features for free and start your devotional journey now.</p>
           </div> 
           <div className='below_cont'>
                <div>
                    <img src={Bell} alt="" />
                    <h2>Divine Temple</h2>
                    <p>Set up your temple on your phone, dedicated to your beloved deities and seek their blessings, anytime, anywhere.</p>
                </div> 
                <div>
                    <img src={Book} alt="" />
                    <h2>Hindu Literature</h2>
                    <p>Get specially curated books, articles and videos based on Sanatan Dharma</p>
                </div> 
                <div>
                    <img src={MusicIcon} alt="" />
                    <h2>Devotional Music</h2>
                    <p>Get access to 5000+ Ad-Free Devotional Music. Listen to Aarti, Mantra, Bhajan, and Chalisa, and emerge yourself into the divinity.</p>
                </div> 
                <div>
                    <img src={StarIcon} alt="" />
                    <h2>Panchang, Horoscope & Festivals</h2>
                    <p>Get regular updates on Daily Horoscope, Panchang, and upcoming Fasts- Festivals.</p>
                </div> 
                <div>
                    <img src={Icon} alt="" />
                    <h2>Puja and Chadhava Seva</h2>
                    <p>Book personalized Puja and Chadhava Seva in your and your family‚s name at 1000+ renowned temples across India.</p>
                </div> 
                <div>
                    <img src={Om} alt="" />
                    <h2>Sanatani Community</h2>
                    <p>Be a part of India‚s largest devotional community and connect with Sanatanis worldwide.</p>
                </div> 
                
           </div>
        </section>
    </div>
    </FEATURESCONTAINER>
  )
}

export default Features




const FEATURESCONTAINER = styled.div`
.main{
   background-color: #FFFFFF;
}

.top_cont{
    text-align: center;
}
.top_cont > h1 {
    font-size: 35px;
    margin-bottom: 15px;
  }

  .top_cont > p {
    font-size: 20.5px;
    margin-bottom: 30px;
  }

section {
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.below_cont{
    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 35px;
    text-align: left;
}
.below_cont > div{
    display: grid;
    gap: 16px;
}
.below_cont > div>h2{
    font-size: 20px;
}
.below_cont > div>p{
    font-size: 16px;
}
.below_cont > div>img{
    border-radius: 10px;
}

`;
