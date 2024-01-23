import React, { ReactElement } from "react";
import type { FC, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { SeatType, SeatTypes } from "../../interfaces/hall/hall.interface";
import { HallUtils } from "../../utils/hall-utils";
import { themeGlobal } from "../../components/layout/globalStyles/variables";

interface ISeatSVG {
  type: SeatTypes;
  selected?: boolean;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const SeatSVG: FC<ISeatSVG> = (props): ReactElement => {
  const { type = SeatType.standard, selected = null, onClick } = props;

  return (
    <motion.svg
      width="40"
      height="46"
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      whileHover={{
        scale: 1.1,
      }}
    >
      {type === SeatType.vip ? (
        <>
          <rect
            id="footer"
            x="37.7"
            y="0.3"
            width="9.4"
            height="35.4"
            rx="3.7"
            transform="rotate(90 37.7 0.3)"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="1"
          />

          <path
            id="bottom"
            d="M6 11.3H34C36.0435 11.3 37.7 12.9565 37.7 15V42.7H2.3V15C2.3 12.9565 3.95655 11.3 6 11.3Z"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="1"
          />
          {selected ? (
            <path
              id="check"
              d="M18.4766 26.949L18.6173 27.087L18.7574 26.9484L25.4922 20.2829L28.1402 22.961L18.6326 32.3714L13.2828 27.1345L15.9195 24.4413L18.4766 26.949Z"
              fill={
                selected
                  ? themeGlobal.orange
                  : HallUtils.emitSeatTypeColor(type)
              }
              strokeWidth="0.4"
            />
          ) : null}
          <path
            id="top"
            d="M0.3 20.4783C0.3 18.723 1.72296 17.3 3.47826 17.3C5.23357 17.3 6.65652 18.723 6.65652 20.4783V36C6.65652 38.3748 8.5817 40.3 10.9565 40.3H29.0435C31.4183 40.3 33.3435 38.3748 33.3435 36V23.75V20.4783C33.3435 18.723 34.7664 17.3 36.5217 17.3C38.277 17.3 39.7 18.723 39.7 20.4783V42C39.7 44.0435 38.0435 45.7 36 45.7H4C1.95655 45.7 0.3 44.0435 0.3 42V20.4783Z"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="1"
          />
        </>
      ) : null}
      {type === SeatType.exclusive ? (
        <>
          <path
            id="bottom"
            d="M6 11.3H34C36.0435 11.3 37.7 12.9565 37.7 15V42.7H2.3V15C2.3 12.9565 3.95655 11.3 6 11.3Z"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="1"
          />
          {selected ? (
            <path
              id="check"
              d="M18.4766 26.949L18.6173 27.087L18.7574 26.9484L25.4922 20.2829L28.1402 22.961L18.6326 32.3714L13.2828 27.1345L15.9195 24.4413L18.4766 26.949Z"
              fill={
                selected
                  ? themeGlobal.orange
                  : HallUtils.emitSeatTypeColor(type)
              }
              strokeWidth="0.4"
            />
          ) : null}
          <path
            id="top"
            d="M0.3 20.4783C0.3 18.723 1.72296 17.3 3.47826 17.3C5.23357 17.3 6.65652 18.723 6.65652 20.4783V36C6.65652 38.3748 8.5817 40.3 10.9565 40.3H29.0435C31.4183 40.3 33.3435 38.3748 33.3435 36V23.75V20.4783C33.3435 18.723 34.7664 17.3 36.5217 17.3C38.277 17.3 39.7 18.723 39.7 20.4783V42C39.7 44.0435 38.0435 45.7 36 45.7H4C1.95655 45.7 0.3 44.0435 0.3 42V20.4783Z"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="1"
          />
        </>
      ) : null}
      {type === SeatType.handicapped ? (
        <>
          <path
            id="bottom"
            d="M5.99999 11.3H34C36.0435 11.3 37.7 12.9565 37.7 15V42.7H2.29999V15C2.29999 12.9565 3.95654 11.3 5.99999 11.3Z"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="1"
          />

          <path
            id="Vector"
            d="M17.8445 20.9111C18.9245 20.9111 19.8 20.0356 19.8 18.9556C19.8 17.8755 18.9245 17 17.8445 17C16.7644 17 15.8889 17.8755 15.8889 18.9556C15.8889 20.0356 16.7644 20.9111 17.8445 20.9111Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
          <path
            id="Vector_2"
            d="M25.6471 29.5195C25.6028 29.2979 25.4831 29.0985 25.3084 28.9552C25.1338 28.8119 24.9148 28.7335 24.6889 28.7333H20.6477L20.2282 25.8H24.6889V23.8444H19.9496L19.7902 22.7278C19.7568 22.4949 19.6405 22.2819 19.4627 22.1278C19.2849 21.9737 19.0575 21.8889 18.8222 21.8889H17.8444C17.7044 21.8893 17.5661 21.9198 17.4389 21.9781C17.3116 22.0365 17.1983 22.1214 17.1066 22.2272C17.0149 22.333 16.9469 22.4572 16.9072 22.5914C16.8675 22.7257 16.857 22.8669 16.8764 23.0055L17.7339 29.011C17.8025 29.4761 18.0355 29.9011 18.3908 30.209C18.746 30.5169 19.1998 30.6871 19.6699 30.6889H23.8871L24.7074 34.7917C24.7993 35.2483 25.2002 35.5778 25.6666 35.5778H28.6V33.6222H26.4674L25.6471 29.5195Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
          <path
            id="Vector_3"
            d="M21.2765 32.1556C20.5539 33.5988 19.0765 34.6 17.3556 34.6C16.189 34.5987 15.0706 34.1347 14.2457 33.3098C13.4208 32.485 12.9569 31.3666 12.9556 30.2C12.9572 29.3239 13.2202 28.4682 13.7109 27.7424C14.2015 27.0166 14.8976 26.4536 15.71 26.1256L15.4274 24.1456C12.8627 24.964 11 27.3684 11 30.2C11 33.7044 13.8512 36.5556 17.3556 36.5556C18.4456 36.5541 19.5169 36.2721 20.4664 35.7368C21.416 35.2015 22.2118 34.4309 22.7773 33.499L22.5094 32.1556H21.2765Z"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
        </>
      ) : null}
      {type === SeatType.standard ? (
        <>
          <path
            id="bottom"
            d="M6 11.3H34C36.0435 11.3 37.7 12.9565 37.7 15V42.7H2.3V15C2.3 12.9565 3.95655 11.3 6 11.3Z"
            fill="#1E2020"
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="0.6"
          />
          {selected ? (
            <path
              id="check"
              d="M18.4766 26.949L18.6173 27.087L18.7574 26.9484L25.4922 20.2829L28.1402 22.961L18.6326 32.3714L13.2828 27.1345L15.9195 24.4413L18.4766 26.949Z"
              fill={
                selected
                  ? themeGlobal.orange
                  : HallUtils.emitSeatTypeColor(type)
              }
              strokeWidth="0.4"
            />
          ) : null}
        </>
      ) : null}
      {type === SeatType.removed ? (
        <>
          <path
            d="M4.7 12H32.7C34.7435 12 36.4 13.6565 36.4 15.7V43.4H1V15.7C1 13.6565 2.65655 12 4.7 12Z"
            fill={themeGlobal.black}
            stroke={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
            strokeWidth="0.6"
          />
          <rect
            x="6.5932"
            y="18.7236"
            width="2.86176"
            height="29.8163"
            rx="1.43088"
            transform="rotate(-45 6.5932 18.7236)"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
          <rect
            x="28.7833"
            y="16.7"
            width="2.86176"
            height="29.8163"
            rx="1.43088"
            transform="rotate(45 28.7833 16.7)"
            fill={
              selected ? themeGlobal.orange : HallUtils.emitSeatTypeColor(type)
            }
          />
        </>
      ) : null}
    </motion.svg>
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
