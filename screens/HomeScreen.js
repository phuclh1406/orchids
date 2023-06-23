import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import { themeColors } from "../theme";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { categories, coffeeItems } from "../data";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Carousel from "react-native-snap-carousel";
import OrchidCard from "../components/orchidCard";
const { width, height } = Dimensions.get("window");

export function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../assets/homeBackground.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{ height: 220 }}
      />

      <SafeAreaView className="flex-1">       
        <View className="mx-5 flex-row justify-between items-center">
        <View className = "flex-row items-center">
        </View>
          <Image
            source={require("../assets/icon1.png")}
            className="h-9 w-9 rounded-full"
          />
        </View>

        <View className="mx-5 shadow" style={{ marginTop: height * 0.02 }}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 px-5 rounded-full mr-2 shadow"
                >
                  <Text className={"font-semibold " + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <OrchidCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
