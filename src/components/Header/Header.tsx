import React from 'react';
import {AppBar, Box, Button, Toolbar} from '@mui/material';
import "./style.scss";
const Header = () => {
  return (
      <Box>
          <AppBar position="static" className="header" sx={{backgroundColor: "#9C9C9C", display: "flex", padding: "10px 0"}}>
          <Toolbar className="header__inner container">
              <div className = "header__logo">
                  <img src="https://thumbs.dreamstime.com/b/%D1%84%D1%80%D0%B0%D0%B7%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%82%D0%BE%D0%B3%D0%BE-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B9%D1%82%D0%B0-115894258.jpg" alt="logo" />
              </div>
              <Button variant="contained" className="header__button" sx={{backgroundColor: "white", color: "black", fontWeight: 700, "&:hover": {backgroundColor: "#F36223"}}}>Войти</Button>
          </Toolbar>
      </AppBar>
      </Box>
  );
};

export default Header;