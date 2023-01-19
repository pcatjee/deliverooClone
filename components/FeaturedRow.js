import { View, Text, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon name="arrow-right" size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards  */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/wru"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 main street"
          short_description="This is a short description "
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
