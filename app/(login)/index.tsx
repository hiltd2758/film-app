import AppButton from '@/components/AppButton'
import AppTextInput from '@/components/AppTextInput'
import { Colors } from '@/constants/colors'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Ready to stream?</Text>
        
        <View style={styles.inputWrapper}>
          <AppTextInput placeholder="Your Email" />
          <AppTextInput placeholder="Password" secureTextEntry />
          <Text style={styles.forget}>Forget Password?</Text>
        </View>
        
        <AppButton title='Login' 
        style={{backgroundColor: Colors.primary, width: '100%', marginRight: 0}} 
        onPress={()=>router.push("../(tabs)/(home)")}
        />

        <Text style={styles.createaccount}>
          Have not signed up yet?{" "}
          <Text onPress={()=>router.push("/sign-up")} style={{color: Colors.primary}}>
            Create Account
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 13,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: "600",
    fontSize: 28,
    color: Colors.text,
    marginBottom: 40,
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  createaccount: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  forget:{
    fontSize: 12,
    color: Colors.gray,
    alignSelf: "flex-end"
  }
})

export default LoginScreen