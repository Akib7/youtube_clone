import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../";
import Loader from "../loader/loader";

const Videos = ({ videos, direction }) => {
  // console.log(videos);

  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
