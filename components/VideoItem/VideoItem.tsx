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
    <View className="flex mb-4">
      <Image
        source={{ uri: video.thumbnailUrl }}
        className="w-full h-48 object-cover"
      />
      <View className="flex flex-col px-4 py-2">
        <View className="flex flex-row items-center mb-2">
          <View className="flex flex-row space-x-2">
            <Image
              source={{ uri: video.channelAvatarUrl }}
              className="w-8 h-8 rounded-full mt-2"
            />
            <Text className="text-sm font-bold">{video.title}</Text>
          </View>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-sm text-gray-500">{video.channelName}</Text>
          <Text className="ml-1 text-sm text-gray-500">•</Text>
          <Text className="ml-1 text-sm text-gray-500">
            {video.views} views
          </Text>
          <Text className="ml-1 text-sm text-gray-500">•</Text>
          <Text className="ml-1 text-sm text-gray-500">{video.uploadedAt}</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
