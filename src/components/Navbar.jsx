// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import Logo from "../assets/logo.svg";
// import User from "../assets/profile.svg";
// import styled from 'styled-components';

// function Navbar() {
//     const navigate = useNavigate();
//     return (
//         <HEADER>
//             <nav>
//                 <div className='logo'>
//                     <img onClick={() => navigate("/")} src={Logo} alt="" />
//                 </div>       
//                 <div className='menu'>
//                     <ul>
//                         <li><NavLink exact className='link' to="/" activeClassName='active'>Home</NavLink></li>
//                         <li><NavLink className='link' to="/puja" activeClassName='active'>Puja</NavLink></li>
//                         <li><NavLink className='link' to="/panchang" activeClassName='active'>Panchang</NavLink></li>
//                         <li><NavLink className='link' to="/temples" activeClassName='active'>Temples</NavLink></li>
//                         <li>Library <span>‹</span></li>
//                     </ul>
//                 </div>       
//                 <div className='user'>
//                     <select name="" id="">
//                         <option value="english">English</option>
//                         <option value="hindi">Hindi</option>
//                     </select>
//                     <img src={User} alt="" />
//                 </div>       
//             </nav>
//         </HEADER>
//     );
// }

// export default Navbar;

// const HEADER = styled.header`
//     position: sticky;
//     top: 0;
//     width: 100%;
//     background-color: #FFFFFF;
//     z-index: 1000; /* Ensure it stays above other content */
//     border-bottom: 1px solid lightgray;

//     nav {
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         padding: 12px 15px;
//         max-width: 1280px;
//         margin: auto;
//     }

//     .logo > img {
//         width: 170px;
//         cursor: pointer;
//     }

//     .menu ul {
//         list-style-type: none; 
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         gap: 35px;
//     }

//     .menu li {
//         font-weight: 650;
//         cursor: pointer;
//     }

//     .menu li:hover {
//         color: #F18912;
//     }

//     .menu ul > li > span {
//         display: inline-block;
//         transform: rotate(270deg);
//         font-weight: 650;
//     }

//     .menu ul > li a {
//         text-decoration: none; 
//         color: black;
//         font-weight: 650;
//     }

//     .menu ul > li a.active, .menu ul > li a:hover {
//         color: #F18912; /* Active and hover color */
//     }

//     .user {
//         display: flex;
//         justify-content: center;
//         gap: 10px;
//     }

//     select {
//         border-radius: 10px;
//         border: 1px solid lightgray;
//         padding: 8px 10px;
//         cursor: pointer;
//     }

//     select > option {
//         border-radius: 10px;
//         border: 1px solid lightgray;
//         padding: 13px 8px;
//     }

//     .user > img {
//         cursor: pointer;
//     }
// `;

















// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import User from "../assets/profile.svg";
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <HEADER>
            <nav>
                <div className='logo'>
                    <img onClick={() => navigate("/")} src={Logo} alt="Logo" />
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
                    <select name="language" id="language-select">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <img src={User} alt="User" onClick={toggleDropdown} />
                    {isDropdownOpen && <DropdownMenu toggleDropdown= {toggleDropdown} />}
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
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
