import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import movies from "@/services/movies.json";
import { icons } from '@/constants/icons';

interface MovieInfoProps {
  label: string;
  value: string;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className='flex-col items-start justify-center mt-5'>
      <Text className='text-light-100 font-bold'>{label}</Text>
      <Text className='text-light-100 font-normal mt-1'>{value || 'N/A'}</Text>
    </View>
  )
}

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  // Find the movie based on imdbID (id)
  const movie = movies.find((movie) => movie.imdbID === id);

  // If movie is not found or still loading
  if (!movie) {
    return (
      <View className='flex-1 justify-center items-center bg-primary'>
        <ActivityIndicator size="large" color="#fff" />
        <Text className="text-white mt-3">Movie not found</Text>
      </View>
    );
  }

  return (
    <View className='bg-primary flex-1'>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <Image source={{ uri: movie?.Poster }} className='w-full h-[550px]' resizeMode='contain' />
        </View>

        <View className='flex-col items-start justify-center mt-5 px-5'>
          <Text className='text-white font-bold text-3xl'>{movie?.Title}</Text>

          <View className='flex-row items-center gap-x-1 mt-2'>
            <Text className='text-light-100 text-sm'>{movie?.Released} •</Text>
            <Text className='text-light-100 text-sm'>{movie?.Rated} •</Text>
            <Text className='text-light-100 text-sm'>{movie?.Runtime}</Text>
          </View>

          <View className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2'>
            <Image source={icons.star} className='w-4 h-4' />
            <Text className='text-light-100 text-sm'>{movie?.imdbRating}/10</Text>
            <Text className='text-light-100 text-sm'>({movie?.imdbVotes} votes)</Text>
          </View>

          <MovieInfo label='Overview' value={movie?.Plot} />
          <MovieInfo label='Genre' value={movie?.Genre} />
          <MovieInfo label='Language' value={movie?.Language} />
          <MovieInfo label='Actors' value={movie?.Actors} />
          <MovieInfo label='Director' value={movie?.Director} />
          <MovieInfo label='Writer' value={movie?.Writer} />
          <MovieInfo label='Awards' value={movie?.Awards} />
        </View>
      </ScrollView>

      <TouchableOpacity className='absolute bottom-12 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50' onPress={router.back}>
        <Image source={icons.arrow} className='size-5 mr-1 mt-0.5 rotate-180' tintColor="#ffffff" />
        <Text className='text-white font-semibold text-base'>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MovieDetails;
