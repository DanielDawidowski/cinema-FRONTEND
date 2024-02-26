import React from "react";
import type {
  FC,
  ReactElement,
  Dispatch as ReactDispatch,
  SetStateAction,
} from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { ShowList, ShowListItem } from "../Home.styles";
import { Grid } from "../../../components/layout/globalStyles/global.styles";
import { IShow } from "../../../interfaces/show/show.interface";
import Tooltip from "../../../components/tooltip/Tooltip";
import { themeGlobal } from "../../../components/layout/globalStyles/variables";
import { IHall } from "../../../interfaces/hall/hall.interface";

interface IHomeShowList {
  shows: IShow[];
  hall: IHall;
  setShow: ReactDispatch<SetStateAction<IShow>>;
}

const HomeShowList: FC<IHomeShowList> = (props): ReactElement => {
  const { shows, setShow, hall } = props;

  return (
    <ShowList>
      <Grid>
        {shows.map((show: IShow, i: number) => (
          <ShowListItem key={i}>
            <div>
              <h5>{show.time}</h5>
              <IoMdArrowRoundForward />
            </div>
            <motion.div onHoverStart={() => setShow(show)}>
              <Tooltip text={`Hall ${hall.hallNumber}`}>
                <FaInfoCircle style={{ fill: themeGlobal.white }} />
              </Tooltip>
            </motion.div>
          </ShowListItem>
        ))}
      </Grid>
    </ShowList>
  );
};

export default HomeShowList;
