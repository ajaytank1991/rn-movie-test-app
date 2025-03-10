import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ScrollView } from 'react-native'

import MovieCard from '@/components/MovieCard';
import { images } from '@/constants/images'
import { icons } from "@/constants/icons";

import movies from "@/services/movies.json";
import SearchBar from "@/components/SearchBar";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    setFilteredMovies(movies.filter((movie) => {
      return movie.Title.toLowerCase().includes(searchQuery.toLowerCase());
    }))
  }, [searchQuery])
  
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover" /> 

      <ScrollView 
          className="flex-1 px-5"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
          >
      <View className='mb-28'>
        <FlatList
              data={filteredMovies}
              renderItem={({item}) => (
                  <MovieCard  {...item} />
              )}
              keyExtractor={(item) => item.imdbID}
              numColumns={3}
              columnWrapperStyle={{ 
              justifyContent: "flex-start",
              gap: 15,
              paddingRight: 0,
              marginBottom: 1,
              }}
              scrollEnabled={false}
              ListHeaderComponent={
                <>
                  <View className="w-full flex-row justify-center items-center mt-20 mb-5">
                      <Image source={icons.logo} className="w-15 h-12 mx-auto" />
                  </View>
                  
                  <View className="my-5">
                    <SearchBar 
                      placeholder="Search movies..." 
                      value={searchQuery}
                      onChangeText={setSearchQuery}
                    />
                  </View>

                  <Text className="text-xl text-white font-bold mb-3">
                    Search Result for{' '}
                    <Text className="text-accent">{searchQuery}</Text>
                  </Text>
                </>
              }
              ListEmptyComponent={
                <View className="mt-10 px-5">
                  <Text className="text-xl text-white font-bold text-center">No movies found</Text>
                </View>
              }
          />
        </View>
        </ScrollView>
    </View>
  )
}

export default Search