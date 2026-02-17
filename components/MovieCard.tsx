import { Colors } from "@/constants/colors";
import { TMDB_IMAGE_BASE_PATH } from "@/hooks/useFetch";
import { hs, ms, vs } from "@/screen-dimensions";
import { Movie } from "@/types";
import { default_image } from "@/utils/assets";
import { getGenreString } from "@/utils/genres";
import { useRouter } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const MovieCard = ({ movie }: { movie: Movie }) => {
    const router = useRouter()

    const tmdb_image_path = movie ? `${TMDB_IMAGE_BASE_PATH}${movie?.poster_path}` : null;


    return (
        <TouchableOpacity onPress={() => router.push("/details")} style={styles.container}>
            <Image style={styles.img} source={tmdb_image_path ? { uri: tmdb_image_path } : default_image} />


            <View>
                <Text numberOfLines={1}
                    style={{ color: Colors.text, fontWeight: "600", fontSize: ms(14) }}
                >
                    {movie?.original_title || movie?.original_name}
                </Text>
                <Text numberOfLines={1}
                    style={{ color: Colors.gray, fontWeight: "600", fontSize: ms(10) }}
                >
                    {getGenreString(movie?.genre_ids || [])}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {
        width: hs(110),
        marginHorizontal: 8,
        marginBottom: 14,
    },
    img: {
        height: vs(150),
        width: "100%",
        borderRadius: 10,
    }
})