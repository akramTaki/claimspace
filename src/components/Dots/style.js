import styled from "styled-components";
import palette from "../../helpers/colorPalette";

const RightBorderWrapper = styled.div`
  width: 20px;
  height: 60px;
  margin-left: -25px;
  margin-right: 10px;
  position: absolute;
  top: 0;
  height: 100%;
  left: 25px;
`;

export const Dots = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  margin-top: 25px;

  span {
    width: 3px;
    height: 3px;
    display: inline-block;
    margin: 3px 2px;
    border-radius: 50%;

    background: ${({ border }) => (border ? border : palette("gray", 2))};
  }

  transition: all 0.3s ease;
`;

export default RightBorderWrapper;
