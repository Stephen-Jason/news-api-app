import React from "react";
import { Pagination } from "@mui/material";

const Paginator = ({pageCount, currentPageNumber, onPageChange}) => {
    return <Pagination
            count={pageCount}
            sx={{ mb: "25px" }}
            color="primary"
            variant="outlined"
            shape="rounded"
            page={currentPageNumber} 
            onChange={onPageChange}
          />
  };

export default Paginator;