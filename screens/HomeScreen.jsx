import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const Navigation = useNavigation();
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      {/* Header  */}
      <View className="mt-7 bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <Icon name="chevron-down" size={20} color="#00CCBB" />
            </Text>
          </View>
          <Icon name="user" size={35} color="#00CCBB" />
        </View>

        {/* search  */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
          <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
            <Icon name="search" size={20} color="gray" />
            <TextInput
              placeholder="Restaurents and cuisines"
              keyboardType="default"
            />
          </View>
          <Icon name="sliders" size={20} color="#00CCBB" />
        </View>
        {/* Body  */}
        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Categories  */}
          <Categories />
          {/* Featured */}
          <FeaturedRow
            id="123"
            title="Featured"
            description="Paid placements from our partners"
          />
          {/* Tasty Discounts  */}
          <FeaturedRow
            id="1234"
            title="Tasty Discounts"
            description="Paid placements from our partners"
          />
          {/* Offers near you  */}
          <FeaturedRow
            id="12345"
            title="Offers Near You"
            description="Paid placements from our partners"
          />
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;