// import React from 'react'
// import { Link } from "react-router-dom";
// import Logo from "../assets/logo.svg"
// import User from "../assets/profile.svg"
// import styled from 'styled-components';

// function Navbar() {
//   return (
//    <HEADER>
//    <header>
//         <nav>
//             <div className='logo'>
//                 <img src={Logo} alt="" />
//             </div>       
//             <div className='menu'>
//                 <ul>
//                     <li><Link className='link' to="/">Home</Link></li>
//                     <li><Link to="/puja">Puja</Link></li>
//                     <li><Link to="/panchang">Panchang</Link></li>
//                     <li><Link to="temples">Temples</Link></li>
//                     <li>Library <span>‹</span></li>
//                 </ul>
//             </div>       
//             <div className='user'>
//                 <select name="" id="">
//                     <option value="english">English</option>
//                     <option value="hindi">Hindi</option>
//                 </select>
//                 <img src={User} alt="" />
//             </div>       
//         </nav>
//    </header>
//    </HEADER>
//   );
// }

// export default Navbar;

// const HEADER = styled.div`
//     * {
//         margin: 0;
//         padding: 0;
//         box-sizing: border-box;
//      }
    
//     header{
//         border-bottom: 1px solid lightgray;
//     }

//     ul > li > span{
//         display: inline-block;
//         transform: rotate(270deg);
//         font-weight: 650;
//     }
//     li{
//         font-weight: 650;
//         cursor: pointer;
//     }
//     ul {
//         list-style-type: none; 
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         gap: 35px;
//     }

//     ul > li a{
//         text-decoration: none; 
//         color: black;
//         font-weight: 650;
//     }

//     nav{
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         padding: 12px 15px;
//         background-color: #FFFFFF;
//         margin: auto;
//         height: auto;
//         max-width: 1280px;
//     }
    
//     .logo > img{
//         width: 170px;
//         cursor: pointer;
//     }

//     .user{
//         display: flex;
//         justify-content: center;
//         /* align-items: center; */
//         gap: 10px;
//     }

//     select{
//         border-radius: 10px;
//         border: 1px solid lightgray;
//         padding: 8px 10px;
//         cursor: pointer;
//     }
//     select > option{
//         border-radius: 10px;
//         border: 1px solid lightgray;
//         padding: 13px 8px;
//     }
//     .user>img{
//         cursor: pointer;
//     }
    
// `





// import React from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import Logo from "../assets/logo.svg";
// import User from "../assets/profile.svg";
// import styled from 'styled-components';

// function Navbar() {
//     const navigate = useNavigate()
//   return (
//     <HEADER>
//       <header>
//         <nav>
//           <div className='logo'>
//            <img onClick={()=>navigate("/")} src={Logo} alt="" />
//           </div>       
//           <div className='menu'>
//             <ul>
//               <li><NavLink exact className='link' to="/" activeClassName='active'>Home</NavLink></li>
//               <li><NavLink className='link' to="/puja" activeClassName='active'>Puja</NavLink></li>
//               <li><NavLink className='link' to="/panchang" activeClassName='active'>Panchang</NavLink></li>
//               <li><NavLink className='link' to="/temples" activeClassName='active'>Temples</NavLink></li>
//               <li>Library <span>‹</span></li>
//             </ul>
//           </div>       
//           <div className='user'>
//             <select name="" id="">
//               <option value="english">English</option>
//               <option value="hindi">Hindi</option>
//             </select>
//             <img src={User} alt="" />
//           </div>       
//         </nav>
//       </header>
//     </HEADER>
//   );
// }

// export default Navbar;

// const HEADER = styled.div`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   header {
//     border-bottom: 1px solid lightgray;
//     position: sticky;
//     top: 0;
//   }

//   ul > li > span {
//     display: inline-block;
//     transform: rotate(270deg);
//     font-weight: 650;
//   }
//   li {
//     font-weight: 650;
//     cursor: pointer;
//   }
//   li:hover{
//     color: #F18912;
//   }
//   ul {
//     list-style-type: none; 
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 35px;
//   }

//   ul > li a {
//     text-decoration: none; 
//     color: black;
//     font-weight: 650;
//     &.active, &:hover {
//       color: #F18912; /* Active and hover color */
//     }
//   }

//   nav {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 12px 15px;
//     background-color: #FFFFFF;
//     margin: auto;
//     height: auto;
//     max-width: 1280px;
//   }
  
//   .logo > img {
//     width: 170px;
//     cursor: pointer;
//   }

//   .user {
//     display: flex;
//     justify-content: center;
//     /* align-items: center; */
//     gap: 10px;
//   }

//   select {
//     border-radius: 10px;
//     border: 1px solid lightgray;
//     padding: 8px 10px;
//     cursor: pointer;
//   }
//   select > option {
//     border-radius: 10px;
//     border: 1px solid lightgray;
//     padding: 13px 8px;
//   }
//   .user > img {
//     cursor: pointer;
//   }
// `;










import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import User from "../assets/profile.svg";
import styled from 'styled-components';

function Navbar() {
    const navigate = useNavigate();
    return (
        <HEADER>
            <nav>
                <div className='logo'>
                    <img onClick={() => navigate("/")} src={Logo} alt="" />
                </div>       
                <div className='menu'>
                    <ul>
                        <li><NavLink exact className='link' to="/" activeClassName='active'>Home</NavLink></li>
                        <li><NavLink className='link' to="/puja" activeClassName='active'>Puja</NavLink></li>
                        <li><NavLink className='link' to="/panchang" activeClassName='active'>Panchang</NavLink></li>
                        <li><NavLink className='link' to="/temples" activeClassName='active'>Temples</NavLink></li>
                        <li>Library <span>‹</span></li>
                    </ul>
                </div>       
                <div className='user'>
                    <select name="" id="">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <img src={User} alt="" />
                </div>       
            </nav>
        </HEADER>
    );
}

export default Navbar;

const HEADER = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #FFFFFF;
    z-index: 1000; /* Ensure it stays above other content */
    border-bottom: 1px solid lightgray;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 15px;
        max-width: 1280px;
        margin: auto;
    }

    .logo > img {
        width: 170px;
        cursor: pointer;
    }

    .menu ul {
        list-style-type: none; 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 35px;
    }

    .menu li {
        font-weight: 650;
        cursor: pointer;
    }

    .menu li:hover {
        color: #F18912;
    }

    .menu ul > li > span {
        display: inline-block;
        transform: rotate(270deg);
        font-weight: 650;
    }

    .menu ul > li a {
        text-decoration: none; 
        color: black;
        font-weight: 650;
    }

    .menu ul > li a.active, .menu ul > li a:hover {
        color: #F18912; /* Active and hover color */
    }

    .user {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    select {
        border-radius: 10px;
        border: 1px solid lightgray;
        padding: 8px 10px;
        cursor: pointer;
    }

    select > option {
        border-radius: 10px;
        border: 1px solid lightgray;
        padding: 13px 8px;
    }

    .user > img {
        cursor: pointer;
    }
`;
