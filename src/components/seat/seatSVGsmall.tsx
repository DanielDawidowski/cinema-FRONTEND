import React, { ReactElement } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { SeatType } from "../../interfaces/hall/hall.interface";
import { HallUtils } from "../../utils/hall-utils";
import { themeGlobal } from "../layout/globalStyles/variables";
import { ISeatSVG } from "./seatSVG.interface";

const SeatSVGsmall: FC<ISeatSVG> = (props): ReactElement => {
  const {
    type = SeatType.standard,
    selected = null,
    onClick,
    selection = false,
  } = props;

  return (
    <motion.svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={selection && type === SeatType.removed ? undefined : onClick}
      whileHover={{
        scale: 1.1,
      }}
    >
      {type === SeatType.vip ? (
        <>
          <path
            id="seat"
            d="M2.1 6.00006C2.1 5.78259 2.20975 5.55674 2.38322 5.38327C2.55669 5.20981 2.78254 5.10006 3 5.10006H15C15.2175 5.10006 15.4433 5.20981 15.6168 5.38327C15.7903 5.55674 15.9 5.78258 15.9 6.00006V17.9001H2.1V6.00006Z"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke-width="0.2"
          />

          <path
            id="footer"
            d="M2 2.5C2 3.25 2.5 4 3 4H15C15.5 4 16 3.24991 16 2.5C16 1.75009 15.5 0.999978 15 1H3C2.5 0.999992 2 1.75 2 2.5Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke-width="0.2"
          />

          <path
            id="back"
            d="M3 8.00009C3 7.00004 1 7.00006 1 8.00009V18C0.999997 18.5001 1.5 19.0001 2 19.0001H16C16.5 19.0001 17 18.5001 17 18V8.00009C16.9999 7.00009 15 7.00003 15 8.00009V16.0001C15 16.5001 14.5 17.0001 14 17.0001H4C3.5 17.0001 3 16.5001 3 16.0001V8.00009Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="0.2"
          />

          {selected ? (
            <path
              id="check"
              d="M5 12L6 11L8 13L12 9L13 10L8 15L5 12Z"
              fill={
                selected
                  ? themeGlobal.orange
                  : HallUtils.emitSeatTypeColor(type)
              }
              strokeWidth="0.2"
            />
          ) : null}
        </>
      ) : null}
      {type === SeatType.exclusive ? (
        <>
          <path
            id="seat"
            d="M2.1 6.00006C2.1 5.78259 2.20975 5.55674 2.38322 5.38327C2.55669 5.20981 2.78254 5.10006 3 5.10006H15C15.2175 5.10006 15.4433 5.20981 15.6168 5.38327C15.7903 5.55674 15.9 5.78258 15.9 6.00006V17.9001H2.1V6.00006Z"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke-width="0.2"
            fill="#1E2020"
          />
          {selected ? (
            <path
              id="check"
              d="M5 12L6 11L8 13L12 9L13 10L8 15L5 12Z"
              fill={
                selected
                  ? themeGlobal.orange
                  : HallUtils.emitSeatTypeColor(type)
              }
              strokeWidth="0.2"
            />
          ) : null}
          <path
            id="back"
            d="M3 8.00009C3 7.00004 1 7.00006 1 8.00009V18C0.999997 18.5001 1.5 19.0001 2 19.0001H16C16.5 19.0001 17 18.5001 17 18V8.00009C16.9999 7.00009 15 7.00003 15 8.00009V16.0001C15 16.5001 14.5 17.0001 14 17.0001H4C3.5 17.0001 3 16.5001 3 16.0001V8.00009Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="0.2"
          />
        </>
      ) : null}
      {type === SeatType.handicapped ? (
        <>
          <path
            id="seat"
            d="M2.1 6.00006C2.1 5.78259 2.20975 5.55674 2.38322 5.38327C2.55669 5.20981 2.78254 5.10006 3 5.10006H15C15.2175 5.10006 15.4433 5.20981 15.6168 5.38327C15.7903 5.55674 15.9 5.78258 15.9 6.00006V17.9001H2.1V6.00006Z"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke-width="0.2"
            fill="#1E2020"
          />

          <path
            id="Vector"
            d="M8.11106 8.77778C8.60198 8.77778 8.99995 8.37981 8.99995 7.88889C8.99995 7.39797 8.60198 7 8.11106 7C7.62014 7 7.22217 7.39797 7.22217 7.88889C7.22217 8.37981 7.62014 8.77778 8.11106 8.77778Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
          <path
            id="Vector_2"
            d="M11.6578 12.6906C11.6377 12.5899 11.5833 12.4993 11.5039 12.4342C11.4245 12.369 11.3249 12.3334 11.2222 12.3333H9.38534L9.19467 11H11.2222V10.1111H9.068L8.99556 9.60353C8.98037 9.49767 8.92752 9.40083 8.8467 9.33078C8.76588 9.26074 8.66251 9.22218 8.55556 9.2222H8.11111C8.04748 9.22241 7.98462 9.23624 7.92678 9.26277C7.86893 9.28929 7.81744 9.32789 7.77576 9.37598C7.73407 9.42406 7.70317 9.48051 7.68512 9.54153C7.66707 9.60255 7.66229 9.66673 7.67111 9.72975L8.06089 12.4595C8.09205 12.6709 8.19798 12.8641 8.35945 13.0041C8.52092 13.144 8.72722 13.2214 8.94089 13.2222H10.8578L11.2307 15.0871C11.2724 15.2947 11.4547 15.4444 11.6667 15.4444H13V14.5555H12.0307L11.6578 12.6906Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
          <path
            id="Vector_3"
            d="M9.67112 13.8889C9.34267 14.5449 8.67112 15 7.88889 15C7.35864 14.9994 6.85027 14.7885 6.47533 14.4136C6.10038 14.0386 5.88948 13.5303 5.88889 13C5.88964 12.6018 6.00918 12.2128 6.23221 11.8829C6.45524 11.553 6.77163 11.2971 7.14089 11.148L7.01245 10.248C5.84667 10.62 5 11.7129 5 13C5 14.5929 6.296 15.8889 7.88889 15.8889C8.38436 15.8882 8.87132 15.7601 9.30292 15.5167C9.73453 15.2734 10.0963 14.9231 10.3533 14.4996L10.2316 13.8889H9.67112Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
        </>
      ) : null}
      {type === SeatType.standard ? (
        <>
          <path
            id="seat"
            d="M2.1 6.00006C2.1 5.78259 2.20975 5.55674 2.38322 5.38327C2.55669 5.20981 2.78254 5.10006 3 5.10006H15C15.2175 5.10006 15.4433 5.20981 15.6168 5.38327C15.7903 5.55674 15.9 5.78258 15.9 6.00006V17.9001H2.1V6.00006Z"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            stroke-width="0.2"
            fill="#1E2020"
          />
          {selected ? (
            <path
              id="check"
              d="M5 12L6 11L8 13L12 9L13 10L8 15L5 12Z"
              fill={
                selected
                  ? themeGlobal.orange
                  : HallUtils.emitSeatTypeColor(type)
              }
              strokeWidth="0.2"
            />
          ) : null}
        </>
      ) : null}
      {type === SeatType.removed ? (
        <>
          <path
            id="seat"
            d="M2.1 6.00006C2.1 5.78259 2.20975 5.55674 2.38322 5.38327C2.55669 5.20981 2.78254 5.10006 3 5.10006H15C15.2175 5.10006 15.4433 5.20981 15.6168 5.38327C15.7903 5.55674 15.9 5.78258 15.9 6.00006V17.9001H2.1V6.00006Z"
            fill={themeGlobal.black}
            stroke={
              selected
                ? themeGlobal.orange
                : HallUtils.emitSeatTypeColor(type) && selection
                ? themeGlobal.black
                : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="0.2"
          />
          <rect
            id="Rectangle 5"
            x="11.6317"
            y="8"
            width="0.880177"
            height="7.96443"
            rx="0.440088"
            transform="rotate(45 11.6317 8)"
            fill={
              selected
                ? themeGlobal.orange
                : HallUtils.emitSeatTypeColor(type) && selection
                ? themeGlobal.black
                : HallUtils.emitSeatTypeColor(type)
            }
          />

          <rect
            id="Rectangle 6"
            x="6"
            y="8.62238"
            width="0.880177"
            height="7.96443"
            rx="0.440088"
            transform="rotate(-45 6 8.62238)"
            fill={
              selected
                ? themeGlobal.orange
                : HallUtils.emitSeatTypeColor(type) && selection
                ? themeGlobal.black
                : HallUtils.emitSeatTypeColor(type)
            }
          />
        </>
      ) : null}
    </motion.svg>
  );
};

SeatSVGsmall.propTypes = {
  type: PropTypes.oneOf([
    SeatType.standard,
    SeatType.exclusive,
    SeatType.vip,
    SeatType.removed,
    SeatType.handicapped,
  ]).isRequired,
  selected: PropTypes.bool,
};

export default SeatSVGsmall;
