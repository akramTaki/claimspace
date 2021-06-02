import styled from "styled-components";
import palette from "../../helpers/colorPalette";
import RightBorder from "../Dots/style";

export const ElementCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: space-evenly;
  padding: ${({ noShadow }) => (noShadow ? "5px 0px" : "24px 24px 24px 32px")};
  background: ${palette("white", 1)};
  box-shadow: ${({ noShadow }) =>
    noShadow ? "unset" : "0px 8px 32px rgba(0, 0, 0, 0.16)"};
  border-radius: 4px;
  width: 250px;
  margin: ${({ noShadow }) => (noShadow ? "0 0" : "30px 0")};
  border: 2px solid ${({ border }) => border || palette("white", 1)};
  transition: border 0.1s ease;

  &:active {
    border: 2px solid ${({ border }) => border || palette("gray", 2)};

    ${RightBorder} {
      background: ${({ border }) => border || palette("gray", 2)};

      span {
        background: ${palette("white", 1)};
      }
    }
  }
`;
