import React, {useState, useEffect} from "react";
import { Stack, Skeleton, Card, Typography, CardMedia, CardActions, Box, CardContent, Button } from "@mui/material";
import axios from "axios";

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

const FullNewsArticle = ({ url }) => {
    const [fullArticle, setFullArticle] = useState();
    const cardSX = {
      margin: "auto",
      width: "80%",
      bgcolor: "background.paper",
      border: "2px solid #aaa8a8",
      boxShadow: 24,
      p: 4
    };
  
    //when the FullNewsArticle component is rendered use articlextractor.com API to get article via url
    useEffect(() => {
      let getRequest = `https://api.articlextractor.com/v1/extract?url=${url}&api_token=EB9nu8q3cgGsdmCOvaUbTtakLrvC0RChUcBCspz1`;
      axios
        .get(encodeURI(getRequest))
        .then((response) => {
          setFullArticle(response.data);
        })
        .catch((error) => setFullArticle(dummyFullArticle.data));
    }, []);
  
    
    const skeletonLoader = () => {
      return (
        <Stack spacing={1} sx={{ width: "85%", margin: "auto" }}>
          <Skeleton variant="rectangular" width={"100%"} height={120} />
          <Skeleton variant="rectangular" width={"100%"} height={400} />
          <Skeleton variant="rounded" width={"100%"} height={400} />
        </Stack>
      );
    };
  
    if (!fullArticle) return skeletonLoader();
    const {
      title,
      top_image,
      text,
      source_url,
      publish_date,
      authors,
      meta_description
    } = fullArticle?.data;
  
    return (
      <Card sx={cardSX}>
        <Typography sx={{ mb: "20px" }} variant="h2">
          {title}
        </Typography>
        <CardMedia component="img" image={top_image} />
        <Box
          sx={{
            m: "auto",
            mt: "30px",
            mb: "20px",
            width: "95%",
            boxShadow: 4,
            p: "15px",
            bgcolor: "#ececec"
          }}
        >
          <Typography variant="h5">{meta_description}</Typography>
        </Box>
        <Typography
          component="span"
          sx={{ mt: "5px", mb: "5px", ml: "20px" }}
          variant="subtitle1"
        >
          {authors[0] && "Author: " + authors[0]}
        </Typography>
        <Typography
          sx={{ fontStyle: "italic", ml: "20px" }}
          component="span"
          variant="subtitle1"
        >
          {"Published: " + calcTimeSincePublished(publish_date)}
        </Typography>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} variant="body1">
            {text}
          </Typography>
  
          <CardActions>
            <Button
              sx={{ mt: "20px" }}
              variant="contained"
              target="_blank"
              href={url}
            >
              visit original article
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  };

export default FullNewsArticle;