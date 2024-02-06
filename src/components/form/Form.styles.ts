import styled from "styled-components";
import { StyledSpinner } from "../spinner/Spinner.styles";

export const FormStyles = styled.form`
  display: grid;
  margin: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size4} ${(props) => props.theme.size1};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 8px;
  outline: none;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size6} 0;
    padding: ${(props) => props.theme.size6};
  }
`;

export const FormItemStyles = styled.div<{ $list?: boolean }>`
  margin-bottom: ${(props) => props.theme.size1};
  justify-content: space-between;
  align-items: center;
  ${({ $list }) =>
    $list
      ? `
          display: flex;
        `
      : null};
  svg {
    width: 25px;
    height: 25px;
  }

  ${StyledSpinner} {
    margin-right: ${(props) => props.theme.size1};
  }
`;

export const FormImage = styled.div`
  position: relative;
  height: 200px;
  margin: ${(props) => props.theme.size1} 0;
  background-color: ${(props) => props.theme.secondary_light};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 24px;
  outline: none;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoint_small}) {
    height: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormList = styled.li`
  margin: ${(props) => props.theme.size4} 0;
  padding: ${(props) => props.theme.size1};
  border: 1px solid ${(props) => props.theme.secondary_light};
  border-radius: 4px;
  outline: none;
  box-shadow: 1px 1px 4px ${(props) => props.theme.secondary_light};
  background: ${(props) => props.theme.primary};

  h4 {
    color: ${(props) => props.theme.white};
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  svg {
    width: 28px;
    height: 28px;
    cursor: pointer;
    fill: ${(props) => props.theme.red};
  }
`;
