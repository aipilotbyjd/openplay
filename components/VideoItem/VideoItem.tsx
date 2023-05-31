import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import Video from "../Video";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="flex">
      <Image source={{ uri: video.thumbnailUrl }} className="h-48 w-full" />
      <View className="pt-2 flex flex-row items-center">
        <Image
          source={{ uri: video.channelAvatarUrl }}
          className="h-10 w-10 rounded-full"
        />
        <View className="flex ml-2">
          <Text className="text-base font-bold line-clamp-1">
            {video.title}
          </Text>
          <View className="flex flex-row items-center">
            <Text className="text-sm text-gray-500">{video.channelName}</Text>
            <Text className="text-sm text-gray-500 mx-1">•</Text>
            <Text className="text-sm text-gray-500">{video.views} views</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={25}
          color="gray"
          className="ml-auto"
        />
      </View>
    </View>
  );
};

export default VideoItem;
