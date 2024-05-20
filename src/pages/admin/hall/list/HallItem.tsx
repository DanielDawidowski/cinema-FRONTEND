import React from "react";
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
import { IHall } from "../../../../interfaces/hall/hall.interface";

interface IHallProps {
  hall: IHall;
  deleteHall: (hallId: string) => Promise<void>;
}

const HallItem: FC<IHallProps> = ({ hall, deleteHall }): ReactElement => {
  return (
    <StyledTr>
      <StyledTd>
        <h3>{hall.hallNumber}</h3>
      </StyledTd>
      <StyledTd>
        <Icons>
          <Link to={`/admin/hall/edit/${hall._id}`}>
            <AiOutlineEdit style={{ fill: themeGlobal.blue }} />
          </Link>
          <MdDeleteForever
            style={{ fill: themeGlobal.red }}
            onClick={() => deleteHall(hall._id as string)}
          />
        </Icons>
      </StyledTd>
    </StyledTr>
  );
};

export default HallItem;
