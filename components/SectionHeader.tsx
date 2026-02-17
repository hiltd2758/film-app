
import { Colors } from "@/constants/colors"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.sectionheader}>
      <Text style={{ color: Colors.text, fontWeight: "600", fontSize: 16 }}>
        {title}
      </Text>

      <TouchableOpacity activeOpacity={.8} style={{ padding: 10 }}>
        <Text style={{ color: Colors.primary }}>
          See more
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    sectionheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    paddingHorizontal: 14,
  }
})