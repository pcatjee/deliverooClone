import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Icon name="star" size={22} color="green" style={{ opacity: 0.5 }} />
          <Text>
            <Text className="text-xs text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Icon1
            name="md-location-sharp"
            size={22}
            color="gray"
            style={{ opacity: 0.5 }}
          />
          <Text className="text=xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
