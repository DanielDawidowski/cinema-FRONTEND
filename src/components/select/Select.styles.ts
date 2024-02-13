import styled from "styled-components";
import { motion } from "framer-motion";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: ${(props) => props.theme.size3};
`;

export const SelectLabel = styled.label`
  display: block;
  margin-left: ${(props) => props.theme.size1};
`;

export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.size3};
  padding: ${(props) => props.theme.size2};
  border: 2px solid ${(props) => props.theme.white};
  background: ${(props) => props.theme.primary};
  box-shadow: 1px 1px 1px ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  text-transform: uppercase;
  outline: none;
  letter-spacing: 1.2px;
`;

export const SelectMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  z-index: 10;
  padding: ${(props) => props.theme.size2};
  font-size: ${(props) => props.theme.size4};
  border: 2px solid ${(props) => props.theme.green};
  outline: none;
  box-shadow: 2px 1px 6px ${(props) => props.theme.dark};
  max-height: 400px;
  overflow-y: scroll;
`;

export const SelectOption = styled(motion.div)`
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: ${(props) => props.theme.size2};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.black_light};
  border-bottom: ${(props) => props.theme.green};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-color: ${(props) => props.theme.orange};
    box-shadow: 3px 2px 6px ${(props) => props.theme.dark};
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.primary};
  }
`;
