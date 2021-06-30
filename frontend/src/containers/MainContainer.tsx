import React from 'react'
import { Image } from 'rebass';
import FullScreenBox from "../components/FullScreenBox";
import CenteredBox from "../components/CenteredBox";
import GradientBox from "../components/GradientBox";
import TextBox from "../components/TextBox";
import styled from "styled-components";

const HeaderText = styled.h1`
  color: white;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 16px;
  text-align: center;
  width: 100%;
`;


const SubText = styled.h3`
  color: white;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 16px;
  text-align: center;
  width: 100%;
`;

const ContractText = styled.h5`
  color: white;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 16px;
  text-align: center;
  width: 100%;
`;
function MainContainer() {
  return (
    <>
      <FullScreenBox>
        <CenteredBox>
          <Image
            src='glacier-finance-brand.png'
            variant='avatar'
            positon='relative'
            sx={{
              width: '50%',
              height: '15%',
            }}
          />
          <HeaderText size='50px'>KuCoin Money</HeaderText>
          <SubText size='10px'>Introducing the $KUM Token.</SubText>
          <SubText size='10px'>Add some Kreme, to your $KOFFEE.</SubText>
          <ContractText>contract address: </ContractText>
        </CenteredBox>
        <GradientBox />
      </FullScreenBox>
    </>
  );
}


export default MainContainer;
