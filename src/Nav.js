import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
color:#fff;
background: #326277;
padding:30px;
box-shadow: 0 10px 18px #343a40;

ul {  
  display: flex;
  justify-content:center;
  list-style: none;
  font-weight: 400;
  font-size: 1.5em;
}


li a {
  padding:20px;
  color: white;
  text-align: center;
  text-decoration: none;
}

li a:hover {
  color: #c9c6c6;
  border-bottom: 4px solid #c9c6c6;
}

`;

const Nav = () => {
    return (
      <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Team">Team</Link>
          </li>
        </ul>
      </nav>
      </Wrapper>
    );
  }
  

export default Nav;
