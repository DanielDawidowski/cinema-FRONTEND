import styled from "styled-components";
import { motion } from "framer-motion";

export const CarouselContainer = styled.div`
  overflow: hidden;
  height: 100%;
  margin: ${(props) => props.theme.size3};

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: 0;
  }
`;

export const CarouselInner = styled(motion.div)`
  position: relative;
  height: max-content;
`;

export const CarouselTitle = styled(motion.div)`
  position: absolute;
  top: 15%;
  left: 2%;
  z-index: 1;
  width: 35%;

  h3 {
    color: transparent;
    background-image: ${(props) => props.theme.primary};
    background-clip: text;
    -webkit-background-clip: text;
    letter-spacing: 1px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      font-size: 3.5rem;
    }
  }
`;

export const CarouselSlider = styled.div`
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const CarouselSlide = styled(motion.img)`
  overflow: hidden;
  cursor: grab;
`;
