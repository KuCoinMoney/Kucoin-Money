import styled from "styled-components";
import { Image } from 'rebass';

const Box = styled.div`
    display: inline-block;
    width: 100%;
    top: 50%;
    text-align: center;
`;

const Text = styled.span`
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;
`;

function FooterBrand() {
    return (
            <Box>
                <Image
                    src='kucoin-money-brand.png'
                    variant='avatar'
                    sx={{
                        height: 70,
                    }}
                />
                <Text> Kucoin Money</Text>
            </Box>
  );
}

export default FooterBrand;