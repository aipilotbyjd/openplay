import { ScrollView } from "react-native";
import { View } from "../../components/Themed";
import VideoListItem from "../../components/VideoListItem";
import HeaderCategory from "../../components/HeaderCategory/HeaderCategory";
import { useState } from "react";

export default function TabOneScreen() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 mt-0" showsVerticalScrollIndicator={false}>
        {/* categories */}
        <HeaderCategory onCategoryChange={handleCategoryChange} />
        <ScrollView>
          <VideoListItem category={selectedCategory} />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
