import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const HeaderCategory = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "new", "unwached", "expired", "active"];

  return (
    <View className="py-2 pb-3">
      <ScrollView
        className="px-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => {
          const isActive = category === activeCategory;
          const textClass = isActive ? "text-white" : "text-black";
          const buttonStyle = isActive ? "bg-green-500" : "bg-gray-200";
          return (
            <TouchableOpacity
              onPress={() => setActiveCategory(category)}
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
