import React, { useCallback, useState, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { themeGlobal } from "../../../../components/layout/globalStyles/variables";
import {
  Icons,
  StyledTd,
  StyledTr,
} from "../../../../components/layout/globalStyles/global.styles";
import { IShow } from "../../../../interfaces/show/show.interface";

interface IShowProps {
  show: IShow;
  deleteShow: (movieId: string) => Promise<void>;
}

const ShowItem: FC<IShowProps> = ({
  show,
  deleteShow,
}): ReactElement | null => {
  return (
    <StyledTr>
      <StyledTd>
        <img src={show.movie.img} alt={show.movie.name} />
      </StyledTd>
      <StyledTd>{show.movie.name}</StyledTd>
      <StyledTd>{show.city}</StyledTd>
      <StyledTd>{show.hall}</StyledTd>
      <StyledTd>{show.time}</StyledTd>

      <StyledTd>
        <Icons>
          <Link to={`/admin/show/edit/${show._id}`}>
            <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
          </Link>
          <MdDeleteForever
            style={{ fill: themeGlobal.red }}
            onClick={() => deleteShow(show._id as string)}
          />
        </Icons>
      </StyledTd>
    </StyledTr>
  );
};

export default ShowItem;
