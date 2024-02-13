import React, { useState } from "react";
import type { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IMenuAdmin, menuAdmin } from "../Menu.interface";
import Dropdown from "../../../dropdown/Dropdown";
import {
  AdminBody,
  AdminBodyItem,
  AdminHeader,
  AdminStyles,
  AdminTitle,
} from "../Menu.styles";

const AdminDropdown: FC = (): ReactElement => {
  const [link, setLink] = useState<string>("");

  const handleLinkName = (name: string): void => {
    setLink(name);
  };

  return (
    <Dropdown label="Admin" link={link !== ""}>
      <AdminStyles>
        {link ? (
          <AdminHeader onClick={() => setLink("")}>
            <IoIosArrowDown />
            <h4>{link}</h4>
          </AdminHeader>
        ) : null}
        <AdminBody $left={link === ""}>
          {menuAdmin.map((item: IMenuAdmin, i: number) => (
            <>
              {link === "" ? (
                <AdminTitle>
                  <h4 key={i} onClick={() => handleLinkName(item.name)}>
                    {item.name}
                  </h4>
                </AdminTitle>
              ) : null}
              {item.name === link
                ? item.links.map((el, i) => (
                    <AdminBodyItem>
                      <Link key={i} to={el.link}>
                        <h4>{el.name}</h4>
                      </Link>
                    </AdminBodyItem>
                  ))
                : null}
            </>
          ))}
        </AdminBody>
      </AdminStyles>
    </Dropdown>
  );
};

export default AdminDropdown;
