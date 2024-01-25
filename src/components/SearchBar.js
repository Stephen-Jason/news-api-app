import React from "react";
import { Button } from "@mui/material";

const btnSXStyle = {
    bgcolor: "white",
    "&:hover": {
      bgcolor: "white",
      textDecoration: "underline"
    }
  };

const SearchBar = ({onSearchChange, searchInputValue, onClickSearch}) => {
    return(
      <>
        <input
          style={{ marginRight: "20px" }}
          value={searchInputValue}
          placeholder="search..."
          onChange={onSearchChange}/>
        <Button onClick={onClickSearch} size="small" sx={btnSXStyle}>
          search
        </Button>
  </>)
  };

export default SearchBar;