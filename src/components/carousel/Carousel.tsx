import React, { useEffect, useState, ReactElement, useCallback } from "react";
import type { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CarouselContainer,
  CarouselInner,
  CarouselSlide,
  CarouselSlider,
  CarouselTitle,
} from "./Carousel.styles";
import { Container } from "../layout/globalStyles/global.styles";
import { homeSlides } from "./Carousel.slides";

const carouselVariants: Variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Carousel: FC = (): ReactElement => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const nextStep = useCallback((): void => {
    setDirection(1);
    if (index === homeSlides.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }, [index]);

  const prevStep = useCallback((): void => {
    setDirection(-1);
    if (index === 0) {
      setIndex(homeSlides.length - 1);
      return;
    }
    setIndex(index - 1);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextStep]);

  return (
    <Container>
      <CarouselContainer>
        <CarouselInner>
          <CarouselTitle>
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {homeSlides[index].title as string}
              </motion.h3>
            </AnimatePresence>
          </CarouselTitle>
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <CarouselSlider>
              <CarouselSlide
                whileTap={{ cursor: "grabbing" }}
                variants={carouselVariants}
                animate="animate"
                initial="initial"
                exit="exit"
                src={homeSlides[index].image}
                alt="slides"
                key={homeSlides[index].id}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
                onDragEnd={(e, { offset }) => {
                  // console.log("velocity", velocity);
                  if (offset.x > 10) {
                    nextStep();
                  } else if (offset.x < -10) {
                    prevStep();
                  }
                }}
              />
            </CarouselSlider>
          </AnimatePresence>
        </CarouselInner>
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;
