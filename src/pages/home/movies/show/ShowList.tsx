import React, { useState, useEffect, useCallback } from "react";
import type {
  FC,
  ReactElement,
  Dispatch as ReactDispatch,
  SetStateAction,
} from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShowList, ShowListItem } from "../../Home.styles";
import { Grid } from "../../../../components/layout/globalStyles/global.styles";
import { IShow, IShows } from "../../../../interfaces/show/show.interface";
import Tooltip from "../../../../components/tooltip/Tooltip";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import { IHall } from "../../../../interfaces/hall/hall.interface";
import { hallService } from "../../../../services/api/hall/hall.service";

interface IShowList {
  shows: IShows[];
  selected: IShows | null;
  setShow: ReactDispatch<SetStateAction<IShow>>;
}

const HomeShowList: FC<IShowList> = (props): ReactElement => {
  const { shows, setShow, selected } = props;
  const [hall, setHall] = useState<IHall>({} as IHall);

  useEffect(() => {
    console.log("shows", shows);
  }, [shows]);

  const getHall = useCallback(async () => {
    try {
      const response = await hallService.getHall("1");
      setHall(response.data.hall);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getHall();
  }, [getHall]);

  return (
    <ShowList>
      <Grid>
        {shows.map((show: IShows) =>
          show.shows.map((s: IShow, i: number) =>
            show.movie._id === selected?.movie?._id ? (
              <Link key={i} to={`/booking/${s._id}`}>
                <ShowListItem key={i}>
                  <div>
                    <h5>{s.time}</h5>
                    <IoMdArrowRoundForward />
                  </div>
                  <motion.div onHoverStart={() => setShow(show)}>
                    <Tooltip text={`Hall ${hall.hallNumber}`}>
                      <FaInfoCircle style={{ fill: themeGlobal.white }} />
                    </Tooltip>
                  </motion.div>
                </ShowListItem>
              </Link>
            ) : null
          )
        )}
      </Grid>
    </ShowList>
  );
};

export default HomeShowList;
