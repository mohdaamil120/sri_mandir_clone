import React, { useState } from 'react';
import styled from 'styled-components';
import Minus from "../assets/minus.webp";
import Tick from "../assets/tick.webp";
import Solar from "../assets/solar.webp";

function PujaBenefits() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const benefits = [
    {
      title: "Prevention of Misfortunes",
      content: "Due to Shani’s affliction in the horoscope, individuals experience unfortunate events in their lives. Participating in Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek on saturday helps mitigate such occurrences.",
      image: Minus
    },
    {
      title: "Relief from Adversities",
      content: "Due to the influence of Saturn's affliction, individuals often encounter obstacles in all aspects of their lives. It is believed that worshipping Shani Dev provides protection from obstacles and difficulties. Those who perform this worship are blessed with patience, respect, courage and capability in dealing with challenges, which enables them to successfully overcome all obstacles in life. By performing Shani Puja, individuals receive the blessing of a life free from obstacles.",
      image: Tick
    },
    {
      title: "Freedom from Saade Saati and Choti Dhaiya",
      content: "Shani Dhaiya is said to last for two and a half years. Shani Saade Saati and Dhaiya are generally considered to be inauspicious and troublesome. Saade Saati Dosha Nivaran Mahapuja is considered to be very effective in getting rid of this inauspicious situation. On the other hand, performing Shani Til Tel Abhishek also reduces the effect of Shani Dosha present in the horoscope.",
      image: Solar
    }
  ];

  return (
    <BENEFITSCONTAINER>
      <div className='main'>
        <div className='benefits_cont'>
          <h2>Puja Benefits</h2>
          <div className='benefits_cards_cont'>
            {benefits.map((benefit, index) => (
              <div className='benefit_card' key={index}>
                <div className='img_cont'>
                  <img src={benefit.image} alt={benefit.title} />
                </div>
                <div className='text_cont'>
                  <h3>{benefit.title}</h3>
                  <p>
                    {expandedCard === index
                      ? benefit.content
                      : benefit.content.substring(0, 134) + '...'}
                  </p>
                  <button onClick={() => toggleReadMore(index)}>
                    {expandedCard === index ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BENEFITSCONTAINER>
  );
}

export default PujaBenefits;

const BENEFITSCONTAINER = styled.div`
  /* Write all CSS here */

  .benefits_cont {
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }
  .benefits_cont > h2 {
    margin: 40px 0;
  }
  .benefits_cards_cont {
    display: flex;
    justify-content: space-between;
  }

   
  .benefit_card {
    display: flex;
    width: 33%;
    margin-bottom: 20px;
    gap: 15px;
    box-sizing: border-box;
  }

  .img_cont > img {
    width: 50px;
    height: auto;
  }
  .text_cont {
    flex: 1;
  }
  .text_cont h3 {
    margin-bottom: 15px;
  }
  .text_cont p {
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .text_cont button {
    border: none;
    background: none;
    color: orange;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
  }

`;
