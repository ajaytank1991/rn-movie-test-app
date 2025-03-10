import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";

interface Movie {
    imdbID: string
    Title: string
    Genre: string
    Poster: string,
    imdbRating: string,
    Year: string
}

const MovieCard = ({Title, Genre, Poster, imdbID, imdbRating, Year}: Movie) => {
  return (
        <TouchableOpacity className='w-[30%]' disabled={true}>
            <Image
            source={{
                uri: Poster
                ? "https://placehold.co/250x400/ffffff/1a1a1a.png"
                : "https://placehold.co/250x400/ffffff/1a1a1a.png",
            }}
            className="w-full h-44 rounded-lg"
            resizeMode="cover"
            />
            <View className="flex-row items-center justify-start mt-1">
                <Text className="text-white text-sm">{Title} ({Year})</Text>
            </View>
            <View className="flex-row items-center justify-start gap-x-1 mt-1">
                <Image source={icons.star} className="size-4" />
                <Text className="text-white text-sm">{imdbRating}</Text>
            </View>
            <View className="flex-row items-center justify-start mt-1">
                <Text className="text-white text-sm">{Genre}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default MovieCard