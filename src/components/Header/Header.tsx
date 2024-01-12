import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';


const Header = () => {
  return (
      <AppBar position="static" className={"header"}>
        <Toolbar className={"header__inner container"}>
          <div className = "header__logo">
            <img src="https://www.robinskey.com/wp-content/uploads/2013/09/To-Do-List-image.jpg" alt="logo" />
          </div>
        </Toolbar>
        {/*<Typography variant="h6" gutterBottom>Todo List</Typography>*/}
        <Button variant="outlined">Войти</Button>
      </AppBar>
  );
};

export default Header;