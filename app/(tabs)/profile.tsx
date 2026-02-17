import MovieCard from '@/components/MovieCard';
import { Colors } from '@/constants/colors';
import { movies } from '@/mock-data';
import { ms } from "@/screen-dimensions";
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SectionHeader from './../../components/SectionHeader';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
          <Image source={require("@/assets/images/profile.jpg")} style={styles.profile} />
          <Text style={styles.name}>Hil</Text>
          <Text style={{ color: Colors.gray, textAlign: 'center' }}>hiltd@gmail.com</Text>
        </View>

        <Text style={{ color: Colors.primary, fontWeight: "600", fontSize: 16, marginHorizontal: 22 }}>Watch History</Text>
        <View style={{ marginVertical: 12 }}>

          <SectionHeader title="Yesterday" />
          <FlatList horizontal data={movies} renderItem={({ item }) => (<MovieCard
            genre={item.genre}
            title={item.title}
            image={item.image} />

          )} />
        </View>

        <View style={{ marginBottom: 12 }}>

          <SectionHeader title="15th January, 2026" />
          <FlatList horizontal data={[...movies].reverse()} renderItem={({ item }) => (<MovieCard
            genre={item.genre}
            title={item.title}
            image={item.image} />

          )}
          />

        </View>



      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 4,
  },
  profile: {
    height: ms(150),
    width: ms(150),
    borderRadius: "50%",

  },
  name: {
    color: Colors.text,
    fontWeight: "600",
    fontSize: ms(20),
    marginTop: 12,
    // textAlign: 'center',
  }
})