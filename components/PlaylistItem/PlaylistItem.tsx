import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface PlaylistItemProps {
  playlist: Playlist;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ playlist }) => {
  const playlists: Playlist[] = [
    {
      id: "1",
      title: "Pop Hits",
      subtitle: "Popular pop songs",
      thumbnailUrl: "https://example.com/pop.jpg",
    },
    {
      id: "2",
      title: "Rock Anthems",
      subtitle: "Classic and modern rock hits",
      thumbnailUrl: "https://example.com/rock.jpg",
    },
    {
      id: "3",
      title: "Hip Hop Essentials",
      subtitle: "Essential hip hop tracks",
      thumbnailUrl: "https://example.com/hiphop.jpg",
    },
    // Add more playlists as needed
  ];

  return (
    <TouchableOpacity className="flex items-center py-2">
      <Image
        source={{ uri: playlist.thumbnailUrl }}
        className="w-16 h-16 mr-4"
      />
      <View className="flex-1">
        <Text className="text-lg font-bold mb-1">{playlist.title}</Text>
        <Text className="text-gray-500 text-sm">{playlist.subtitle}</Text>
      </View>
      <MaterialIcons name="play-arrow" size={24} color="gray" />
    </TouchableOpacity>
  );
};

export default PlaylistItem;
