import React from "react";
import { Card, CardContent, Box, Typography, CardMedia } from "@mui/material";

const calcTimeSincePublished = (dateString) => {
    let publishedDate = new Date(dateString);
    let now = new Date();
    let hoursSince = (now.getTime() - publishedDate.getTime()) / 3600000;
    let daysSince = Math.floor(hoursSince / 24);
    let minutesSince = hoursSince * 60;
  
    if (daysSince > 0) {
      return daysSince.toString() + "d ago";
    }
  
    if (hoursSince > 1) {
      return Math.floor(hoursSince).toString() + "h ago";
    }
  
    return Math.floor(minutesSince).toString() + "m ago";
  };

const MiniNewsArticle = ({onClick, article}) => {
    const {url, title, image_url, published_at, uuid} = article;
    const cardSX = {
      "&:hover": {
        boxShadow: 5
      },
      maxWidth: "45vw",
      minWidth: "200px",
      bgcolor: "white",
      boxShadow: 0,
      mb: 3,
      transition: "box-shadow 350ms",
      border: "1px solid white"
    };

    const noClickEventsStyle = {
        "pointerEvents": "none"
    }
  
    return (
      <Card key={uuid} data-url={url} onClick={onClick} sx={cardSX}>
        <CardContent style={noClickEventsStyle} className="noClick">
          <Box
            style={noClickEventsStyle}
            className="noClick"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
            style={noClickEventsStyle}
              className="noClick"
              sx={{ fontWeight: "bold", fontSize: 20, pr: 5 }}
            >
              {title}
            </Typography>
            <CardMedia
            style={noClickEventsStyle}
              className="noClick"
              sx={{ height: 150, minWidth: 150 }}
              image={image_url}
            />
          </Box>
          <Typography>{calcTimeSincePublished(published_at)}</Typography>
        </CardContent>
      </Card>
    );
  };

export default MiniNewsArticle;