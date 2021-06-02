import styled from "styled-components";
import palette from "../helpers/colorPalette";
import { DropZoneWrapper } from "../components/DropZone/style";
import { ElementCardWrapper } from "../components/ElementCard/style";

export const List = styled.div`
  width: 250px;
  float: left;
`;

export const Steps = styled.div`
  min-height: 500px;
  width: 280px;
  float: right;
  background: ${palette("white", 1)};
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 15px 12px;
  margin-top: 30px;

  &.isDragging > :not(${DropZoneWrapper}) {
    opacity: 0.3;
  }

  &.isDragging ${DropZoneWrapper} {
      opacity: 1;
    }
  }

  ${ElementCardWrapper} {
    &:active {
      border: 2px solid ${palette("white", 1)};
    }
  }
`;

export const Seperator = styled.hr`
  color: ${palette("gray", 1)};
  margin: 15px auto;
`;
