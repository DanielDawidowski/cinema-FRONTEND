import { ILegend } from "../components/Legend/Legend.interface";
import { BreakPoint } from "../components/layout/Layout.interface";

export class Utils {
  static emitNumber = (windowSize: number): number => {
    switch (true) {
      case BreakPoint.small > windowSize:
        return 2;
      case BreakPoint.medium > windowSize:
        return 3;
      case BreakPoint.large > windowSize:
        return 4;
      default:
        return 4;
    }
  };

  static scrollToElement = (id: string, time: number): void => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition - 80;
      const startTime = performance.now();
      const duration = time; // 5 seconds in milliseconds

      const scrollAnimation = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);

        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      };

      requestAnimationFrame(scrollAnimation);
    }
  };
}

// export enum BreakPoint {
//   xsmall = 480,
//   small = 680,
//   medium = 960,
//   large = 1440,
//   xlarge = 1920,
// }
