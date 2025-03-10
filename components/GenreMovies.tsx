import React from "react";
import { FlatList, Text } from "react-native"

import movies from "@/services/movies.json";
import MovieCard from "./MovieCard";

interface GenreMovie {
    Title: string
    Genre: string
}

const GenreMovies = ({Title, Genre}: GenreMovie) => {
  return (
    <>
        <Text className="text-lg text-white font-bold mt-5 mb-3">{Title}</Text>
        <FlatList
            data={movies.filter((movie) => movie.Genre.includes(Genre))}
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
        />
    </>
  )
}

export default GenreMovies