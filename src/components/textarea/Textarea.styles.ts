import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.size2};
`;

export const TextAreaLabel = styled.label`
  margin-bottom: ${(props) => props.theme.size1};
`;

export const StyledTextArea = styled.textarea`
  padding: 8px;
  border-radius: ${(props) => props.theme.size1};
  resize: none;
  border: 1px solid ${(props) => props.theme.grey};
  background: ${(props) => props.theme.black_light};

  &:focus {
    border-color: ${(props) => props.theme.orange};
    box-shadow: inset 0 0 2px ${(props) => props.theme.orange},
      1px 0 6px ${(props) => props.theme.orange};
    color: ${(props) => props.theme.primary_dark};
  }
`;
