import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import SearchBar from "./SearchBar";

const btnSXStyle = {
    bgcolor: "white",
    "&:hover": {
      bgcolor: "white",
      textDecoration: "underline"
    }
  };

const Header = ({
    searchInputValue,
    searchHandler,
    onClickSearch,
    showBackButton,
    onBackBtnClicked
  }) => {
    return (
      <Box sx={{ flexGrow: 1, mb: "25px" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PilotNews
            </Typography>
            {showBackButton ? (
              <Button onClick={onBackBtnClicked} sx={btnSXStyle} variant="outlined">
                Home
              </Button>
            ) : <SearchBar onSearchChange={searchHandler} searchInputValue={searchInputValue} onClickSearch={onClickSearch} />}
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

export default Header;