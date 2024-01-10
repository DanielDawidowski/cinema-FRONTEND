import React from "react";
import type { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import { ButtonColor } from "../../components/button/Button.interface";
import Button from "../../components/button/Button";

const Home: FC = (): ReactElement => {
  return (
    <Layout>
      <h1>siemka</h1>
      <Button color={ButtonColor.primary}>
        <h5>click</h5>
      </Button>
    </Layout>
  );
};

export default Home;
