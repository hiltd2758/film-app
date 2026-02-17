import { Colors } from "@/constants/colors";
import { TMDB_IMAGE_BASE_PATH } from "@/hooks/useFetch";
import { hs, vs } from "@/screen-dimensions";
import { Movie } from "@/types";
import { default_image } from "@/utils/assets";
import { getGenreString } from "@/utils/genres";
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { DimensionValue, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// const ContinueWatchingMovieCard = ({genre, title, image}:ContinueWatchingMovieCardProps) => {
//   return (
//     <TouchableOpacity style={styles.container}>
//         <Image style={styles.img} source={image}/>


//     <View>
//         <Text numberOfLines={1}
//         style={{color: Colors.text, fontWeight: "600",fontSize: ms(14)}}
//         >
//             {title}
//         </Text>
//         <Text numberOfLines={1}
//         style={{color: Colors.gray, fontWeight: "600",fontSize: ms(10)}}
//         >
//             {genre}
//         </Text>
//     </View>
//     </TouchableOpacity>
//   )
// }
const ContinueWatchingMovieCard = ({ movie }: { movie: Movie }) => {
    const getRandomPercenteage = (): DimensionValue => {
        const min = 10;
        const max = 100;
        const value = Math.floor(Math.random() * (max - min + 1) + min);
        return `${value}%`;
    }

    const randomPercentage = getRandomPercenteage()
    const tmdb_image_path = movie
        ? `${TMDB_IMAGE_BASE_PATH}${movie?.backdrop_path}`
        : null;
    return (
        <View style={styles.container}>
            <View style={{ position: "relative" }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.pressplay}>

                    <View style={styles.playbtn}>
                        <FontAwesome5 name="play" size={24} color={"#202020"} />
                    </View>

                </TouchableOpacity>

                <Image source={tmdb_image_path ? { uri: tmdb_image_path } : default_image} style={styles.movie} />

                <View style={styles.progressbarcontainer}>
                    <View style={[styles.progress, { width: randomPercentage }]} />
                </View>
            </View>

            <View style={{ marginTop: 8 }}>
                {/* <Text numberOfLines={1} style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}>{title}</Text>

                <Text numberOfLines={1} style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}>{genre}</Text> */}

                <Text numberOfLines={1}
                    style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}
                >{movie?.title || movie?.original_name}</Text>
                <Text numberOfLines={1}
                    style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}
                >{getGenreString(movie?.genre_ids || [])}</Text>


            </View>
        </View >
    );
}

export default ContinueWatchingMovieCard

const styles = StyleSheet.create({
    container: {
        width: hs(240),
        marginHorizontal: 8,

    },
    img: {
        height: vs(170),
        width: "100%",
        borderRadius: 6,
    },
    pressplay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        alignItems: "center",
        justifyContent: "center",
    },
    progressbarcontainer: {
        marginTop: 8,
        height: 3,
        width: "100%",
        backgroundColor: Colors.text,
        borderRadius: 4,
        overflow: "hidden",
    },
    progress: {
        height: "100%",
        backgroundColor: Colors.primary,
        borderRadius: 4,
    },
    movie: {
        height: vs(170),
        width: "100%",
        borderRadius: 6,
    },
    playbtn: {
        height: 60,
        width: 60,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.text,
    }
})