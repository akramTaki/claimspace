import styled from "styled-components";
import palette from "../helpers/colorPalette";

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${palette("black", 1)};
  margin-bottom: 8px;
`;

export const BodyText = styled.p`
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${palette("black", 1)};
  display: inline-block;
`;

export const Text = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${palette("black", 2)};
  display: flex;
`;
