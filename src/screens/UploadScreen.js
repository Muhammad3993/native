import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { useFonts } from 'expo-font';

const xml = `<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="m 12 2 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 l -6 6 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 l 6 6 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 s -0.105469 -0.519531 -0.292969 -0.707031 l -5.292969 -5.292969 l 5.292969 -5.292969 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 z m 0 0" fill="#fff"/>
            </svg>`
const xml1 = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M12 4V20" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
const xml2 = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z" fill="#040404"/>
                <path d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z" fill="#040404"/>
              </svg>`

const Upload = ({navigation}) => {
  const [fontsLoaded] = useFonts({
    "Syncopate-Bold": require("../../assets/fonts/Syncopate-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        
        <LinearGradient
          colors={["#ED217C", "#040404"]}
          style={styles.content}
        >
          <TouchableOpacity style={styles.top} onPress={() => navigation.navigate("List")}>
            <SvgXml xml={xml} width="39" height="69" />
          </TouchableOpacity>
          <Text style={styles.text}>RIZZGPT</Text>
          <View style={styles.top}>
            <SvgXml xml={xml1} width="39" height="69" />
          </View>
        </LinearGradient>
        <View style={styles.box}>
          <View style={styles.screenBox}>
            <Text style={styles.screenBoxText}>User’s screenshot</Text>
          </View>        
          <Text style={styles.boxText}>Tap to copy rizz 👇</Text>
          <View style={styles.screenBox1}>
            <Text style={styles.screenBoxText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est ut dui faucibus dapibus nec vel erat.</Text>
            <View>
              <SvgXml xml={xml2} width="39" height="69" />
              <Text style={styles.copyText}>Copy</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Generate more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Upload

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#040404"
  },
  content: {
      width: "100%",
      height: 180,
      padding: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      opacity: .7
  },
  top: {
    marginTop: -30,
  },
  text: {
      color: "#fff",
      fontSize: 35,
      fontWeight: "700",
      marginTop: -30,
      fontFamily: "Syncopate-Bold"
  },
  box: {
    padding: 20,
    width: "100%"
  },
  screenBox: {
    width: "100%",
    height: 480,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: -45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screenBoxText: {
    fontSize: 33,
    fontWeight: "600"
  },
  boxText: {
    marginTop: 31,
    marginBottom: 31,
    color: "#fff",
    fontSize: 20
  },
  screenBox1: {
    width: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 15,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  screenBoxText1: {
    width: "80%",
    textAlign: 'left',
    fontSize: 20
  },
  copyText: {
    position: "relative",
    top: -15,
    left: 2
  },
  btn: {
    backgroundColor: "#00A676",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 10,
    shadowRadius: 3,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  }
})