import React, { useEffect, useState } from "react";
import Video from "../Video";
import { FlatList, View } from "react-native";
import VideoItem from "../VideoItem";

const videoData = [
  {
    id: "1",
    thumbnailUrl:
      "https://i.ytimg.com/vi/gsOE7pGZRec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbFyQbJcwE6WeEFUGip3TWi67ORA",
    channelAvatarUrl:
      "https://yt3.ggpht.com/SBra9X0UPsNzyDjGcvN4iw2pb5Qku_3qFd1figMt48J7rUdU8mJYHPHAx0t6d0E6wLcUU__nZjg=s68-c-k-c0x00ffffff-no-rj",
    title: "Next.js Full Course for Beginners | Nextjs 13 Tutorial | 7 Hours",
    channelName: "Dave Gray",
    views: 1000,
  },
  {
    id: "2",
    thumbnailUrl:
      "https://i.ytimg.com/vi/TTjgLB0v4EA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6gCjm4PgBCopePFbZGwHp7flwKA",
    channelAvatarUrl:
      "https://yt3.ggpht.com/SBra9X0UPsNzyDjGcvN4iw2pb5Qku_3qFd1figMt48J7rUdU8mJYHPHAx0t6d0E6wLcUU__nZjg=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Neufc/OFC/BFC Transfer Updates | Neufc Assistant Coach? | El khayati",
    channelName: "Beyond Fireship",
    views: 500,
  },
  {
    id: "3",
    thumbnailUrl:
      "https://i.ytimg.com/vi/TTjgLB0v4EA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6gCjm4PgBCopePFbZGwHp7flwKA",
    channelAvatarUrl:
      "https://yt3.ggpht.com/SBra9X0UPsNzyDjGcvN4iw2pb5Qku_3qFd1figMt48J7rUdU8mJYHPHAx0t6d0E6wLcUU__nZjg=s68-c-k-c0x00ffffff-no-rj",
    title: "I found the perfect component library",
    channelName: "Fireship",
    views: 1000,
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
