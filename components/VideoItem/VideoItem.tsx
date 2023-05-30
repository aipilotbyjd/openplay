import React from "react";
import { View } from "../Themed";

const VideoItem = (props: any) => {
  return (
    <View className="">
      <View>{props.id}</View>
      <View>{props.title}</View>
      <View>{props.imageUrl}</View>
      <View>{props.channel}</View>
    </View>
  );
};

export default VideoItem;
