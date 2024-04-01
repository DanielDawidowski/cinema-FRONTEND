import React, { FC, ReactElement } from "react";
import Layout from "../../../components/layout/Layout";
import { Grid } from "../../../components/layout/globalStyles/global.styles";

const Cancel: FC = (): ReactElement => {
  return (
    <Layout>
      <Grid>
        <h2>Your payment cancelled !</h2>
      </Grid>
    </Layout>
  );
};

export default Cancel;
