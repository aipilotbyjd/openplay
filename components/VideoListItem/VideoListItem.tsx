import React from "react";
import { View } from "../Themed";
import VideoItem from "../VideoItem";

const VideoListItem = (props: any) => {
  const videos = props;
  return (
    <View className="">
      {videos.map((video: any) => {
        return <VideoItem video={video} />;
      })}
    </View>
  );
};

export default VideoListItem;
