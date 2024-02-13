import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { InputContainer, InputField } from "../../input/Input.styles";
import { bg } from "../../layout/globalStyles/global.styles";

export const MenuItem = styled(motion.li)`
  display: grid;
  place-items: center;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchList = styled.div<{ $open: boolean }>`
  position: absolute;
  width: 100%;
  top: 55px;
  left: 0;
  background: ${(props) => props.theme.black_light};
  z-index: 999;
  border-radius: 4px;
  ${({ $open }) =>
    $open
      ? css`
          border: 1px solid ${(props) => props.theme.white};
        `
      : css`
          border: none;
        `}
`;

export const SearchListItem = styled.li`
  height: 100%;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 10px;
  place-items: center;
  padding-bottom: ${(props) => props.theme.size1};
  border-bottom: 1px solid ${(props) => props.theme.orange};
  padding: ${(props) => props.theme.size1};

  img {
    border-radius: ${(props) => props.theme.size1};
    width: 100%;
  }

  div {
    width: 100%;
  }
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

export const SearchStyles = styled.div`
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

export const AdminStyles = styled.div`
  width: 100%;
  height: 100%;
  /* h4 {
    color: ;
  } */
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    cursor: pointer;
    rotate: 90deg;
    fill: ${(props) => props.theme.orange};
    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const AdminTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 ${(props) => props.theme.size1};
  border-radius: 4px;
  margin: 2px 0;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: background-size 0.3s ease-in-out;
    background: ${(props) => props.theme.primary};
  }
  &:hover::before {
    animation: ${bg} 0.3s ease-in-out forwards;
  }
  &:hover h4 {
    color: ${(props) => props.theme.black};
  }
`;

export const AdminBody = styled.div<{ $left: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.$left ? "center" : "flex-start")};
  flex-direction: column;
`;

export const AdminBodyItem = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 ${(props) => props.theme.size1};
  border-radius: 4px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    z-index: -1;
    transition: background-size 0.3s ease-in-out;
    background: ${(props) => props.theme.primary};
  }

  &:hover::before {
    animation: ${bg} 0.3s ease-in-out forwards;
  }

  &:hover h4 {
    color: ${(props) => props.theme.black};
  }
`;
