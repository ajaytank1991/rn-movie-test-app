import React from "react";
import { Image, ScrollView, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import GenreMovies from "@/components/GenreMovies";

export default function Index() {
    

  return (
    <View className="flex-1 bg-primary">
        <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" /> 

        <ScrollView 
          className="flex-1 px-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
          >
          <Image source={icons.logo} className="w-15 h-12 mt-20 mb-5 mx-auto" />

          <View className="flex-1 mt-5">

              <View className="flex-1 mb-1">
                <GenreMovies Title="Action Movies" Genre="Action" />                
              </View>

              <View className="flex-1 mb-1">
                <GenreMovies Title="Drama Movies" Genre="Drama" />                
              </View>

              <View className="flex-1 mb-1">
                <GenreMovies Title="Adventure Movies" Genre="Adventure" />                
              </View>

              <View className="flex-1 mb-1">
                <GenreMovies Title="Fantasy Movies" Genre="Fantasy" />                
              </View>

              <View className="flex-1 mb-1">
                <GenreMovies Title="Sci-Fi Movies" Genre="Sci-Fi" />                
              </View>

              <View className="flex-1 mb-28">
                <GenreMovies Title="Crime Movies" Genre="Crime" />                
              </View>

          </View>
        </ScrollView>
    </View>
  );
}
