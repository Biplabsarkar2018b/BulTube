import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Video } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
const Feed = () => {
  const [selectedCat, setselectedCat] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    

    fetchFromAPI(
    selectedCat
    ).then((data)=>{
      
      setvideos(data.items)
    })
  }, [selectedCat]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCat={selectedCat} setselectedCat={setselectedCat} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
        >
          Biplab pvt ltd
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCat}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        {
          videos.length>0 && <Video videos={videos}/>
        }
      </Box>
    </Stack>
  );
};

export default Feed;
