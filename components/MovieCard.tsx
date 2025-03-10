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
    <Link href={`/movies/${imdbID}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image
            source={{
                uri: Poster
                ? Poster
                : "https://placehold.co/250x400/ffffff/1a1a1a.png",
            }}
            className="w-full h-48 rounded-lg"
            resizeMode="cover"
            />
            <View className="flex-row items-center justify-start mt-1">
                <Text className="text-white" numberOfLines={1}>{Title}</Text>
            </View>            
            <Text className="text-white text-sm mt-1">({Year})</Text>
            <View className="flex-row items-center justify-start gap-x-1 mt-1 mb-4">
                <Image source={icons.star} className="size-4" />
                <Text className="text-white text-sm">{imdbRating}</Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard