import MovieCard from '@/components/MovieCard'
import Overviewsection from '@/components/Overviewsection'
import { Colors } from "@/constants/colors"
import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import ContinueWatchingMovieCard from '@/components/ContinueWatchingMovieCard'
import SectionHeader from '@/components/SectionHeader'
import { movies } from '@/mock-data'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Overviewsection />


        <View style={{ marginVertical: 20 }}>

          <SectionHeader title="Trending now 🔥" />
          <FlatList horizontal data={movies} renderItem={({ item }) => (<MovieCard
            genre={item.genre}
            title={item.title}
            image={item.image} />

          )} />
        </View>





        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Continue Watching" />
          <FlatList
            data={[...movies].reverse()}
            renderItem={({ item }) => (
              <ContinueWatchingMovieCard genre={item.genre}
                title={item.title}
                image={item.image} />

            )
            }
            horizontal
          />


          <View style={{ marginVertical: 20 }}>
            <SectionHeader title="New Releases 🚀" />

          </View>


          <FlatList horizontal data={movies} renderItem={({ item }) => (<MovieCard
            genre={item.genre}
            title={item.title}
            image={item.image} />

          )} />



        </View>


        <View style={{ marginVertical: 20 }}>
          <SectionHeader title="Continue Watching" />
          <FlatList
            data={[...movies].reverse()}
            renderItem={({ item }) => (
              <ContinueWatchingMovieCard genre={item.genre}
                title={item.title}
                image={item.image} />

            )
            }
            horizontal
          />


          <View style={{ marginVertical: 20 }}>
            <SectionHeader title="International Picks 🌍" />

          </View>


          <FlatList horizontal data={[...movies].reverse()} renderItem={({ item }) => (<MovieCard
            genre={item.genre}
            title={item.title}
            image={item.image} />

          )} />



        </View>

      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

  },
  sectionheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    paddingHorizontal: 14,
  }
})