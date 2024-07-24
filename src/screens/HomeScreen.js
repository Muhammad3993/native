import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Syncopate-Bold": require("../../assets/fonts/Syncopate-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#ED217C", "#040404"]} style={styles.content}>
        <Text style={styles.text}>RIZZGPT</Text>
      </LinearGradient>
      <Text style={styles.text1}>Upload a screenshot of a chat or bio</Text>
      <View style={styles.images}>
        <Image
          source={require("../../assets/images/screen1.png")}
          style={styles.img1}
        />
        <Image
          source={require("../../assets/images/screen2.png")}
          style={styles.img}
        />
        <Image
          source={require("../../assets/images/screen3.png")}
          style={styles.img2}
        />
      </View>
      <View style={styles.end}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Upload")}
        >
          <Text style={styles.btnText}>Upload Screenshot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#040404",
  },
  content: {
    width: "100%",
    height: 180,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "700",
    marginTop: -30,
    fontFamily: "Syncopate-Bold",
  },
  text1: {
    width: 270,
    color: "#fffff",
    fontSize: 30,
    textAlign: "center",
    marginTop: -20,
  },
  images: {
    width: "100%",
    height: 260,
    display: "flex",
    flexDirection: "row",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  img: {
    width: 125,
    height: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: -9,
  },
  img1: {
    width: 125,
    height: "100%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    left: 60,
    transform: [{ rotate: "-15deg" }],
  },
  img2: {
    width: 125,
    height: "100%",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    position: "absolute",
    right: 60,
    transform: [{ rotate: "15deg" }],
  },
  end: {
    padding: 20,
    width: "100%",
  },
  btn: {
    width: "100%",
    height: 70,
    backgroundColor: "#00A676",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
