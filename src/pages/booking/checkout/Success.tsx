import React, { FC, ReactElement, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import { useAppDispatch } from "../../../redux-toolkit/hooks";
import { resetSelectedSeats } from "../../../redux-toolkit/reducers/hall/hall.reducer";
import { Grid } from "../../../components/layout/globalStyles/global.styles";

const Success: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetSelectedSeats());
  }, [dispatch]);

  return (
    <Layout>
      <Grid>
        <h2>Thank you for your purchase!</h2>
      </Grid>
    </Layout>
  );
};

export default Success;
