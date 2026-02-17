import FilterItem from '@/components/FilterItem';
import MovieCard from '@/components/MovieCard';
import { Colors } from '@/constants/colors';
import { movies } from '@/mock-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';


const MoviesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          <FilterItem title='Category' />
          <FilterItem title='Region' />
          <FilterItem title='Release Year' />

        </ScrollView>
        <TouchableOpacity activeOpacity={0.8} style={{ padding: 10 }}>
          <MaterialCommunityIcons name="filter-outline" size={24} color={Colors.text}></MaterialCommunityIcons>
        </TouchableOpacity>

      </View>

      <FlatList data={movies}
        renderItem={({ item }) => (
          <MovieCard genre={item.genre} title={item.title} image={item.image} />
        )}
        numColumns={3}
      />
    </View>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

})