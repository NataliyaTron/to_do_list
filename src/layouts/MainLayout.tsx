import React, { FC, PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { Button, Typography } from '@mui/material';

const MainLayout: FC<PropsWithChildren> = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Typography variant="h5" component="h5">
          Todo List – список дел и таск-менеджер № 1 в мире. Он поможет вам обрести концентрацию, организованность и покой.
        </Typography>
        <Button variant="contained">Приступить</Button>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;