import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 105%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: ${(props) => props.theme.black_opacity};
  color: ${(props) => props.theme.orange};
  border-radius: 4px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: -17%;
    left: 14%;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${(props) => props.theme.black_opacity};
  }
`;

export const TooltipTrigger = styled.div`
  &:hover ${TooltipContent} {
    visibility: visible;
    opacity: 1;
  }
`;
