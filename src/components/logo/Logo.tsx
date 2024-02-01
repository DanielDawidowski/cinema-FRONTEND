import React, { ReactElement } from "react";
import propTypes from "prop-types";
import type { FC } from "react";
import LogoImg from "../../assets/images/vue-clone.png";
import { LogoStyles } from "./Logo.styles";
import { Link } from "react-router-dom";

interface ILogo {
  width: string;
  height: string;
  link?: boolean;
}

const Logo: FC<ILogo> = (props): ReactElement => {
  const { width, height, link = false } = props;
  return (
    <LogoStyles>
      <Link to={link ? "/" : ""}>
        <img
          src={LogoImg}
          alt="logo"
          style={{
            width,
            height,
          }}
        />
      </Link>
    </LogoStyles>
  );
};

Logo.propTypes = {
  width: propTypes.string.isRequired,
  height: propTypes.string.isRequired,
};

export default Logo;
