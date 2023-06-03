import { ScrollView } from "react-native";
import { View } from "../../components/Themed";
import VideoListItem from "../../components/VideoListItem";
import HeaderCategory from "../../components/HeaderCategory/HeaderCategory";

export default function TabOneScreen() {
  return (
    <View className="flex-1">
      <ScrollView className="flex-1 mt-0" showsVerticalScrollIndicator={false}>
        {/* categories */}
        <HeaderCategory />
        <ScrollView>
          <VideoListItem />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
