import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Video, ChannelCard } from "./";
import { getChannelDetail } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelD, setchannelD] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getChannelDetail(
      id
      ).then((d)=>{
        if(d?.items){
          console.log(d);
          setchannelD(d.items)
        }else{
          console.log('channel doesnot exist');
        }
      })
  }, [id])
  
  return <div>{id}</div>;
};

export default ChannelDetail;
