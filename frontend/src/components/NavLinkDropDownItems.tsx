import React from 'react';
import styled from "styled-components";

const DropdownContainer = styled.div`
  background-color: #34515e;
  box-shadow: 0 1px 3px #607d8b;
  top: 75px;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  min-width: 120px;
  width: 100%;
  z-index: 2;
  text-align: center;
  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 5px;
      &:hover {
        background-color: #607d8b;
        & > a {
          color: inherit;
         } 
       }
    }
  }

`;

const Text = styled.a`
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin-bottom: 16px;
  text-align: center;
  width: 100%;
  &:hover {
    text-decoration: none;
   }
`;

function NavLinkDropdownItems(props: any) {
  return (
      <DropdownContainer>
           <ul>
              <li><Text href="https://twitter.com/KumMoney">Twitter</Text></li>
              <li><Text href="https://t.me/joinchat/a7qMV2M4O9ZlMDVh">Telegram</Text></li>
              <li><Text href="https://github.com/KuCoinMoney">Github</Text></li>
            </ul>
      </DropdownContainer>
  );
}

export default NavLinkDropdownItems;