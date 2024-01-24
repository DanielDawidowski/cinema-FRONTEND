import styled from "styled-components";
import { Line } from "../../../components/layout/globalStyles/global.styles";
import { InputContainer } from "../../../components/input/Input.styles";
import { ButtonStyles } from "../../../components/button/Button.styles";

export const CreateHallStyles = styled.section`
  display: grid;
  margin: ${(props) => props.theme.size1};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    justify-content: center;
    gap: 2%;
  }

  /* @media ((min-width: 740px) and (orientation: landscape)) {
    background-color: red;
  } */
`;

export const Aside = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.black};
  height: max-content;
  padding: 0 0 ${(props) => props.theme.size1} 0;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 19%;
    position: unset;
    display: grid;
  }
`;

export const Inner = styled.div`
  height: max-content;
  position: unset;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  padding: ${(props) => props.theme.size1};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    position: fixed;
    width: 18%;
    display: flex;
    flex-direction: column;
  }

  ${Line} {
    margin: ${(props) => props.theme.size4} 0;
  }

  ${ButtonStyles} {
    margin-top: 0;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      margin-top: ${(props) => props.theme.size3};
      width: 100%;
    }
  }

  ${InputContainer} {
    width: 30%;
    margin-bottom: 0;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      width: 100%;
    }
  }
`;
