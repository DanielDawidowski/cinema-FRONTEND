import { motion } from "framer-motion";
import styled from "styled-components";
import { InputContainer } from "../../input/Input.styles";

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
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: grid;
    place-items: center;
  }

  ${InputContainer} {
    height: 100%;
    margin-bottom: 0;
  }
  svg {
    position: absolute;
    top: 10px;
    right: 15px;
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.white};
  }
`;
