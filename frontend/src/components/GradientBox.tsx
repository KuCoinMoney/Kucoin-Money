import styled from "styled-components";
import bg from '../data/download.svg';
const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    hsl(222, 80%, 20%),
    hsl(222, 32.6%, 36.1%)
  );
  height: 100%;
  width: 100%;
`;

const BG = styled.div`
  height: 100%;
  width: 100%;
`;
function GradientBox(props: any) {
  return (
    
    <img src={bg} height='100%'/>


    );
}

export default GradientBox;
