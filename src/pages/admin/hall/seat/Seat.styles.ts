import styled from "styled-components";
import { motion } from "framer-motion";

export const SeatStyles = styled(motion.div)<{
  $selected?: boolean;
  $color?: string;
}>`
  background: ${(props) => props.theme.black_light};
  width: 40px;
  height: 40px;
  padding: 5px;
  border: ${(props) => (props.$selected ? "2px" : "1px")} solid
    ${(props) => (props.$selected ? props.theme.orange : props.theme.white)};
  border-radius: 8px 8px 0 0;
  display: grid;
  place-items: center;
  color: ${(props) =>
    props.$selected ? props.theme.orange : props.theme.white};
  font-weight: ${(props) => (props.$selected ? 700 : 300)};
  &:hover {
    border: 1px solid ${(props) => props.theme.orange};
    box-shadow: 0 0 0 1px ${(props) => props.theme.orange};
    transform: scale(1.1);
  }
`;

export const SeatButton = styled(SeatStyles)`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.red};
  border: 1px solid ${(props) => props.theme.red};
`;
