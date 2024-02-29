import React, { ReactElement } from "react";
import type { FC } from "react";
import PropTypes from "prop-types";
import { SeatType } from "../../interfaces/hall/hall.interface";
import useWindowSize from "../../hooks/useWindowSize";
import { BreakPoint } from "../layout/Layout.interface";
import SeatSVGbig from "./seatSVGbig";
import SeatSVGsmall from "./seatSVGsmall";
import { ISeatSVG } from "./seatSVG.interface";

const SeatSVG: FC<ISeatSVG> = (props): ReactElement => {
  const { type, selected, onClick, selection } = props;

  const size = useWindowSize();

  return size.width > BreakPoint.small ? (
    <SeatSVGbig
      type={type}
      selected={selected}
      onClick={onClick}
      selection={selection}
    />
  ) : (
    <SeatSVGsmall
      type={type}
      selected={selected}
      onClick={onClick}
      selection={selection}
    />
  );
};

SeatSVG.propTypes = {
  type: PropTypes.oneOf([
    SeatType.standard,
    SeatType.exclusive,
    SeatType.vip,
    SeatType.removed,
    SeatType.handicapped,
  ]).isRequired,
  selected: PropTypes.bool,
};

export default SeatSVG;
