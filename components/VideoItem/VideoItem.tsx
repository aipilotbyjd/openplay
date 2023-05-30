import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Video from "../Video";

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: video.thumbnailUrl }} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Image
          source={{ uri: video.channelAvatarUrl }}
          style={styles.channelAvatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.channelName}>{video.channelName}</Text>
          <Text style={styles.views}>{video.views} views</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  channelAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  channelName: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  views: {
    fontSize: 14,
    color: "#777",
  },
});

export default VideoItem;
