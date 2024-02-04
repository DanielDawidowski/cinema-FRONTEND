import styled from "styled-components";
import { ButtonStyles } from "../../../components/button/Button.styles";

export const Title = styled.div`
  padding: ${(props) => props.theme.size1};
  margin-bottom: ${(props) => props.theme.size4};
`;

export const AuthContainer = styled.div`
  border-radius: ${(props) => props.theme.size1};
`;

export const AuthInner = styled.div`
  padding: ${(props) => props.theme.size1};
  ${ButtonStyles} {
    margin-top: ${(props) => props.theme.size4};
  }
`;

export const TabsStyles = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.grey};
  border-radius: ${(props) => props.theme.size1};
  margin: ${(props) => props.theme.size1};
`;

export const TabsElement = styled.li<{ $active: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${(props) => props.theme.size2};
  border-radius: ${(props) => props.theme.size1};
  z-index: ${(props) => (props.$active ? 2 : 1)};
  background: ${(props) =>
    props.$active ? props.theme.primary : props.theme.black};
  h4 {
    color: ${(props) =>
      props.$active ? props.theme.black : props.theme.white};
    padding: 4px;
  }
  h5 {
    color: ${(props) =>
      props.$active ? props.theme.black : props.theme.white};
    padding: 4px;
  }
`;

export const Forget = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.theme.size4};

  h3 {
    color: ${(props) => props.theme.orange};
    margin-left: ${(props) => props.theme.size1};
  }

  svg {
    fill: ${(props) => props.theme.grey};
  }
`;

export const SuccessMessage = styled.h4`
  color: ${(props) => props.theme.green};
`;
