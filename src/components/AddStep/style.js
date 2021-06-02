import styled from "styled-components";
import palette from "../../helpers/colorPalette";

export const AddStepWrapper = styled.div``;

export const Input = styled.input`
  padding: 4px;
  border: 1px solid ${palette("blue", 1)};
  font-weight: 600;
  font-size: 16px;
  color: ${palette("black", 1)};
  font-family: Poppins;

  &:focus {
    outline: none;
  }

  &::selection {
    color: #fff;
    background: ${palette("blue", 1)};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 4px;
  border: 1px solid ${palette("blue", 1)};
  font-size: 12px;
  line-height: 18px;
  color: ${palette("black", 1)};
  font-family: Poppins;

  &:focus {
    outline: none;
  }

  &::selection {
    color: #fff;
    background: ${palette("blue", 1)};
  }
`;
