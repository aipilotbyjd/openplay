import React from "react";
import { View, Image, Text } from "react-native";
import Video from "../Video";

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <View className="flex">
      <Image source={{ uri: video.thumbnailUrl }} className="h-48 w-screen" />
      <View>
        <Image source={{ uri: video.channelAvatarUrl }} />
        <View className="flex items-start float-right">
          <Text>{video.title}</Text>
          <Text>{video.channelName}</Text>
          <Text>{video.views} views</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
