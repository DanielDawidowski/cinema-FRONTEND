import { motion } from "framer-motion";
import styled from "styled-components";
import { InputContainer, InputField } from "../../input/Input.styles";

export const MenuItem = styled(motion.li)<{ $active?: boolean }>`
  display: grid;
  place-items: center;
`;

export const MenuStyles = styled(motion.ul)`
  display: grid;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 52px;
  }
`;

export const Logout = styled.div`
  img {
    width: 35px;
    height: 35px;
  }
`;

export const Search = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.grey};
    border-radius: ${(props) => props.theme.size1};
    background-color: ${(props) => props.theme.black_light};
  }

  ${InputContainer} {
    height: 100%;
    margin-bottom: 0;
  }
  ${InputField} {
    padding: ${(props) => props.theme.size3} ${(props) => props.theme.size1};
    border: none;
    border-radius: 8px 0 0 8px;
    &:focus {
      border: none;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.white};
    margin-right: ${(props) => props.theme.size1};
    &:hover {
      transform: scale(1.1);
      transition: transform ease-in-out 0.5s;
    }
  }
`;
