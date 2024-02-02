import React, { FC, PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useNavigate} from "react-router-dom";
import "./style.scss";
import { Button, Typography } from '@mui/material';
import {style} from "./style";


const MainLayout: FC<PropsWithChildren> = () => {
    const navigate = useNavigate();
      const handleNavigate = () => {
          navigate("/main")
     }
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
          <div className="main">
              <Typography variant="h3" component="h3" className="main__text">
                  Управляйте своими делами и организуйте свою жизнь.
              </Typography>
              <Typography variant="h5" component="h5" className="main__text">
                  Запоминайте всё и беритесь за любой проект с помощью заметок,
                  задач и расписания - все в одном месте.
              </Typography>
              <Button onClick={handleNavigate} variant="contained" className="main__button" sx={style.button}>Приступить</Button>
              <div className="main__img">
                  <img src="https://www.webdesign.org/img_articles/20513/Generate-a-better-schedule.jpg" alt = "todo-list"/>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;