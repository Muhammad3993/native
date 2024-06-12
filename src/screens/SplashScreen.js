// src/screens/SplashScreen.js
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {

  const [fontsLoaded] = useFonts({
    "Syncopate-Bold": require("../../assets/fonts/Syncopate-Bold.ttf")
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Paywall');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>RizzGPT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040404',
  },
  text: {
    fontFamily: "Syncopate-Bold",
    fontSize: "50px",
    fontWeight: 'bold',
    color: "#ED217C",
  },
});
