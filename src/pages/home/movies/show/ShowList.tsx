import React from "react";
import type { FC, ReactElement } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShowList, ShowListItem } from "../../Home.styles";
import { Grid } from "../../../../components/layout/globalStyles/global.styles";
import { IShow, IShows } from "../../../../interfaces/show/show.interface";
import Tooltip from "../../../../components/tooltip/Tooltip";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";

interface IShowList {
  shows: IShows[];
  selected: IShows | null;
}

const HomeShowList: FC<IShowList> = (props): ReactElement => {
  const { shows, selected } = props;

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
                  <motion.div>
                    <Tooltip text={`Hall ${s.hall}`}>
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
