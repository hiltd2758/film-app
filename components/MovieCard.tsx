import { Colors } from "@/constants/colors";
import { hs, ms, vs } from "@/screen-dimensions";
import { useRouter } from "expo-router";
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



interface MovieCardProps {
    image?: ImageSourcePropType | undefined;
    title: string
    genre: string
}


const MovieCard = ({ genre, title, image }: MovieCardProps) => {
    const router = useRouter()


    return (
        <TouchableOpacity onPress={() => router.push("/details")} style={styles.container}>
            <Image style={styles.img} source={image} />


            <View>
                <Text numberOfLines={1}
                    style={{ color: Colors.text, fontWeight: "600", fontSize: ms(14) }}
                >
                    {title}
                </Text>
                <Text numberOfLines={1}
                    style={{ color: Colors.gray, fontWeight: "600", fontSize: ms(10) }}
                >
                    {genre}
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