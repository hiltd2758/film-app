import AppButton from '@/components/AppButton'
import AppTextInput from '@/components/AppTextInput'
import { Colors } from '@/constants/colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from "expo-router"

const SignUpScreen = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.text}>Start Streaming Now</Text>
          <Text style={styles.sub}>Join thousands of movie lovers</Text>
        </View>
        
        <View style={styles.inputWrapper}>
          <AppTextInput placeholder="Your Email" />
          <AppTextInput placeholder="Password" secureTextEntry />
          
          <Text style={styles.terms}>
            I agree to the terms of service and privacy policy.
          </Text>
        </View>
        
        <AppButton title='Create account' style={{backgroundColor: Colors.primary, width: '100%'}}/>

        <Text style={styles.createaccount}>
          Already have an account?{" "}
          <Text onPress={()=>router.push("/(login)")} style={{color: Colors.primary}}>
            Log In
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
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  text: {
    fontWeight: "600",
    fontSize: 28,
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  sub: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  terms: {
    fontSize: 12,
    color: Colors.gray,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  createaccount: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
})

export default SignUpScreen