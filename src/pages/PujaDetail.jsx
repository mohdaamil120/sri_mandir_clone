import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Data from '../utils/PujaData';
import Countdown from '../components/Countdown';
import VisitedPeople from '../components/VisitedPeople';

function PujaDetail() {
  let { id } = useParams(); 
  id = +id;

  const puja = Data.find(item => item.id === id);

  if (!puja) {
    return <div>Puja not found</div>;
  }

  return (
    <PujaDetailContainer>
      <div className='main'>
        <section>
            <div className="detail-banner">
                <img src={puja.image} alt={puja.title} />
            </div>
            <div className="detail-content">
                <h5>{puja.title}</h5>
                <div className='line'></div>
                <h1>{puja.description}</h1>
                <h2>{puja.purpose}</h2>
                <p><img src={puja.venueImage} alt="" /> {puja.venue}</p>
                <p><img src={puja.dateImage} alt="" /> {puja.date}</p>
                <h3>Puja booking will close in :</h3>
                <Countdown/>
                <VisitedPeople/>
            </div>
        </section>
       
      </div>  
    </PujaDetailContainer>
  );
}

export default PujaDetail;

const PujaDetailContainer = styled.div`
.detail-content>h1{
    font-size: 25px;
}
.detail-content>h2{
    font-size: 22px;
    color: gray;
}
.detail-content>h3{
    font-size: 14px;
    color: gray;
}
    h5{
        color: #D61F69;

    }
   .line{
    background: linear-gradient(to right,#D61F69, #f5cfde);
    height: 1px;
    width: 400px;
   }
   section{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    margin: auto;
    margin-top: 20px;
    gap: 20px;
   }
   section >div{
    width: 50%;
    height: 500px;
   }
  .detail-banner>img{
    width: 100%;
    height: 500px;
    border-radius: 10px;
  }
  .detail-banner{
    margin-left: 20px;
  }
  .detail-content{
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;
