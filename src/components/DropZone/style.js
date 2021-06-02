import styled from "styled-components";
import palette from "../../helpers/colorPalette";

export const DropZoneWrapper = styled.div`
  width: 260px;
  border: 2px dashed ${palette("blue", 1)};
  border-radius: 3px;
  padding: 17px;
  margin: auto;
  opacity: 0.3;
`;

export const PlusSign = styled.div`
  color: ${palette("blue", 1)};
  padding: 0 3px;
  display: inline;
  border: 2px solid;
  font-weight: 600;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
`;
