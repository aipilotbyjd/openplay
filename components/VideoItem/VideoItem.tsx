import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Video from "../Video";

interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const screenWidth = Dimensions.get("window").width;
  const [showMenu, setShowMenu] = useState(false);

  const handleVideoPress = () => {
    // Handle video press action here
    Alert.alert("Video pressed on window");
  };

  const handleChannelAvatarPress = () => {
    // Handle channel avatar press action here
    Alert.alert("Chennel pressed on window");
  };

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <Pressable onPress={handleVideoPress}>
        <Image
          source={{ uri: video.thumbnailUrl }}
          style={{ width: screenWidth, height: screenWidth * 0.56 }} // Assuming 16:9 aspect ratio for the video thumbnail
        />

        <View style={{ padding: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleChannelAvatarPress}>
              <Image
                source={{ uri: video.channelAvatarUrl }}
                style={{ width: 32, height: 32, borderRadius: 16 }}
              />
            </TouchableOpacity>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                flex: 1,
                marginLeft: 8,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {video.title}
            </Text>
            <TouchableOpacity onPress={handleMenuPress}>
              <MaterialCommunityIcons
                name={showMenu ? "dots-vertical" : "dots-horizontal"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {video.channelName}
            </Text>
            <Text
              style={{
                marginLeft: 4,
                marginRight: 4,
                fontSize: 12,
                color: "gray",
              }}
            >
              •
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {video.views} views
            </Text>
            <Text
              style={{
                marginLeft: 4,
                marginRight: 4,
                fontSize: 12,
                color: "gray",
              }}
            >
              •
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {video.uploadedAt}
            </Text>
          </View>
          {showMenu && (
            <View style={{ marginTop: 8 }}>
              {/* Add your menu content here */}
              <Text>Menu Content</Text>
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default VideoItem;
