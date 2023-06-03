import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

interface HeaderCategoryProps {
  onCategoryChange: (category: string) => void;
}

const HeaderCategory: React.FC<HeaderCategoryProps> = ({
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "new", "unwached", "expired", "active"];

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <View style={{ paddingVertical: 8 }}>
      <ScrollView
        style={{ paddingHorizontal: 16 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => {
          const isActive = category === activeCategory;
          const textClass = isActive ? "text-white" : "text-black";
          const buttonStyle = isActive ? "bg-green-500" : "bg-gray-200";
          return (
            <TouchableOpacity
              onPress={() => handleCategorySelect(category)}
              key={index}
              className={`rounded-md p-1 px-3 mr-2 ${buttonStyle}`}
            >
              <Text className={textClass}>{category}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HeaderCategory;
