import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: ${(props) => props.theme.size3};
`;

export const LableStyles = styled.label`
  font-size: ${(props) => props.theme.size3};
  color: ${(props) => props.theme.white_opacity};
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  margin-left: ${(props) => props.theme.size1};
`;

export const InputField = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.size3};
  border: 1px solid ${(props) => props.theme.grey};
  border-radius: ${(props) => props.theme.size1};
  outline: none;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black_light};
  caret-color: ${(props) => props.theme.orange};
  appearance: none;
  -webkit-appearance: none;
  -webkit-text-fill-color: ${(props) => props.theme.white};
  box-shadow: 0 0 0 1000px ${(props) => props.theme.black_light} inset !important;
  letter-spacing: 1px;
  font-size: ${(props) => props.theme.size2};

  &:focus {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black_light};
    border: 1px solid ${(props) => props.theme.white_opacity};
  }

  &::placeholder {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black_light};
  }
`;
