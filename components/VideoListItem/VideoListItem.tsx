import React, { useEffect, useState } from "react";
import Video from "../Video";
import { FlatList, View } from "react-native";
import VideoItem from "../VideoItem";

const videoData = [
  {
    id: "1",
    thumbnailUrl: "https://example.com/thumbnail1.jpg",
    channelAvatarUrl: "https://example.com/channel1.jpg",
    title: "Video 1",
    channelName: "Channel 1",
    views: 1000,
  },
  {
    id: "2",
    thumbnailUrl: "https://example.com/thumbnail2.jpg",
    channelAvatarUrl: "https://example.com/channel2.jpg",
    title: "Video 2",
    channelName: "Channel 2",
    views: 500,
  },
];

const VideoListItem: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    setVideos(videoData);
  };

  return (
    <View>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoItem video={item} />}
      />
    </View>
  );
};

export default VideoListItem;
