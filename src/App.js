import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/feed";
import VideoDetails from "./components/video details/video-details";
import ChannelDetails from "./components/channel-details/channel-details";
import SearchFeed from "./components/search-feed/search-feed";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" element={<VideoDetails />}></Route>
        <Route path="/channel/:id" element={<ChannelDetails />}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
