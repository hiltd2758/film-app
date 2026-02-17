import { Colors } from "@/constants/colors"
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const RightIcon = ({ icon }: { icon?: any }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.rightconwrapper}>
      {icon ? icon : <Feather name="search" size={24} color={Colors.text} />}
    </TouchableOpacity>
  )
}

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors.gray,
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderColor: Colors.background
        }
      }}
    >
      <Tabs.Screen name='(home)/index'
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen name='movies'
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="play-circle" size={20} color={color} />
          ),
          tabBarLabel: "Movies",
          headerStyle: { backgroundColor: Colors.background },
          headerTitle: "",
          headerRight: () =>{
            return <RightIcon />
          },
          headerLeft: () => <Text style={styles.title}>Movies</Text>
        }}
      />
      <Tabs.Screen name='series'
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="folder" size={20} color={color} />
          ),
          tabBarLabel: "Movies",
          headerStyle: { backgroundColor: Colors.background },
          headerTitle: "",
          headerRight: () =>{
            return <RightIcon />
          },
          headerLeft: () => <Text style={styles.title}>Tv Series</Text>
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
          tabBarLabel: "Me",
          headerStyle: { backgroundColor: Colors.background },
          headerTitle: "",
          headerRight: () => {
            return (
              <RightIcon
                icon={<MaterialCommunityIcons name="cog-outline" color={Colors.text}
                  size={24}
                />
                }
              />
            )
          },
          headerLeft: () => <Text style={styles.title}>Profile</Text>

        }}
      />
    </Tabs>
  )
}

export default TabLayout;

const styles = StyleSheet.create({
  rightconwrapper: {
    height: 45,
    width: 45,
    backgroundColor: "#202020",
    alignItems: "center",
    borderRadius: 22,
    justifyContent: "center",
    marginRight: 14,
  },
  title: {
    color: Colors.text,
    marginLeft: 14,
    fontWeight: "600",
    fontSize: 24,
  }
});