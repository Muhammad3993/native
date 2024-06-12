import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SvgXml } from 'react-native-svg';
import { useFonts } from 'expo-font';

const xml1 = `<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M12 4V20" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`

const data = [
    { id: '1', text: 'User’s screenshot' },
    { id: '2', text: 'User’s screenshot' },
    { id: '3', text: 'User’s screenshot' },
    { id: '4', text: 'User’s screenshot' },
    { id: '5', text: 'User’s screenshot' },
    { id: '6', text: 'User’s screenshot' },
    { id: '7', text: 'User’s screenshot' },
    { id: '8', text: 'User’s screenshot' },
    { id: '9', text: 'User’s screenshot' },
    { id: '10', text: 'User’s screenshot' },
    { id: '11', text: 'User’s screenshot' },
    { id: '12', text: 'User’s screenshot' },
    { id: '13', text: 'User’s screenshot' },
    { id: '14', text: 'User’s screenshot' },
    { id: '15', text: 'User’s screenshot' },
    { id: '16', text: 'User’s screenshot' },
    { id: '17', text: 'User’s screenshot' },
    { id: '18', text: 'User’s screenshot' },
    // More items...
  ];


const ListScreen = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        "Syncopate-Bold": require("../../assets/fonts/Syncopate-Bold.ttf"),
      });
    
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <LinearGradient
                colors={["#ED217C", "#040404"]}
                style={styles.content}
            >
                <Text style={styles.text}>RIZZGPT</Text>
            </LinearGradient>
            <View style={styles.listItems}>
                {
                    data.map(item => (
                        <View style={[styles.item, shadowStyle()]} key={item.id}>
                            <Text style={styles.title}>{item.text}</Text>
                            <View style={styles.top}>
                                <SvgXml xml={xml1} width="39" height="69" />
                            </View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.bottomBtn} onPress={() => navigation.navigate("Upload")}>
                <Text style={styles.text1}>Upload Screenshot</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ListScreen;

const shadowStyle = () => {
    if (Platform.OS === 'ios') {
      return {
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 4,
        shadowRadius: 3,
      };
    } else if (Platform.OS === 'android') {
      return {
        elevation: 3,
      };
    } else {
      return {}; // Boshqa platformalar uchun
    }
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#040404"
    },
    scroll: {
        width: "100%"
    },
    content: {
        width: "100%",
        height: 180,
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: .7
    },
    text: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "700",
        marginTop: -30,
        fontFamily: "Syncopate-Bold"
    },
    listItems: {
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
        marginTop: -50
    },
    item: {
        width: "29%",
        height: 150,
        backgroundColor: "#040404",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        fontWeight: "400"
    },
    top: {
        width: 43,
        height: 52,
        transform: [{ rotate: '-45deg' }],
        position: "absolute",
        bottom: 0,
        right: 0
    },
    bottom: {
        padding: 10,
        width: "100%",
        height: 140,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomBtn: {
        width: "100%",
        height: 70,
        backgroundColor: "#00A676",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text1: {
        fontSize: 23,
        color: "#fff",
        fontWeight: "800"
    }
})