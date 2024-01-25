import React, { useState } from "react";
import MiniNewsArticle from "./MiniNewsArticle";
import Paginator from "./Paginator";
import { Box, CircularProgress } from "@mui/material";

const HomePage = ({ onClickArticle, articleData }) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const articlesPerPage = 9;
    const articles = articleData?.data || [];
    
    const calculatePageCount = () => {
      if (articles.length % articlesPerPage != 0) {
        return Math.floor(articles.length / articlesPerPage) + 1;
      }
      return Math.floor(articles.length / articlesPerPage);
    };
  
    const onPageChange = (e, value) => {
      setCurrentPageNumber(value);
    };
  
    const getArticlesForCurrentPage = () => {
      let endIndex = currentPageNumber * articlesPerPage;
      let startIndex = endIndex - articlesPerPage;
      
      return articles.slice(startIndex, endIndex);
    };
  
    const renderArticles = () => {
      return getArticlesForCurrentPage().map((article) => (
        <MiniNewsArticle article={article} onClick={onClickArticle}/>
      ));
    };
    
    const spinner = () => (
      <Box sx={{ width: "100%", display: "flex", justifyContent: "centre" }}>
        <CircularProgress sx={{ m: "auto" }} color="primary" />
      </Box>
    );
    
    if(!articleData) return spinner();
  
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Paginator pageCount={calculatePageCount()} currentPageNumber={currentPageNumber} onPageChange={onPageChange}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around", 
            flexWrap: "wrap",
            alignContent: "left"
          }}
        >
          {renderArticles()}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Paginator pageCount={calculatePageCount()} currentPageNumber={currentPageNumber} onPageChange={onPageChange}/>
        </Box>
      </>
    );
  };

export default HomePage;