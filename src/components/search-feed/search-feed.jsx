import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { Videos } from "../";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams(); //useParam is helping to get the input we are writting in the searchBar
  //useEffect is for when the app loads for the first time
  //it's like initState()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      // console.log(data);
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search for videos.{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
