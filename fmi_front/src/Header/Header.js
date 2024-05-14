import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100px;
  background-color: white;
  color: black;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 48px;

  .menu {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    font-size: 24px;
    gap: 10rem;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
      height: 3px;
      width: 25px;
      background-color: black;
      margin: 4px;
      transition: 0.3s;
    }
  }

  @media (max-width: 500px) {
    .menu {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <p>FMI</p>
      <div className="menu">
        <a href="/">HOME</a>
        <a href="/mypage">MY PAGE</a>
      </div>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </HeaderStyle>
  );
};

export default Header;
