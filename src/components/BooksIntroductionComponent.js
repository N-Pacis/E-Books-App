import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import booksmage from '../../assets/Bibliophile-bro.png'

export default function BooksIntroductionComponent() {
  return (
    <View style={styles.container}>
        <Image source={booksmage} style={styles.homeImage}/>
        <Text style={styles.homeText}>Explore free books</Text>  
        <Text style={styles.homeParagraph}>Read over 3500+ books published here. We provide various categories including science fiction, adventure, horror and kids novels.</Text>
        <TouchableOpacity style={styles.getStartedBtn}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal:15,
        paddingTop: 50
      },
      homeImage:{
        marginTop:"10%",
        width: "95%",
        height:400,
        resizeMode: "cover"
      },
      homeText:{
        fontFamily:"sans-serif",
        fontWeight:"bold",
        fontSize:26,
        color:"#4153ab",
        textAlign:"center"
      },
      homeParagraph:{
        marginTop: "2%",
        fontFamily:"sans-serif",
        fontSize:16,
        opacity:0.9,
        color:"#19191a",
        marginLeft:10,
        marginRight:5,  
        marginBottom:"21%",
      },
      getStartedBtn:{
        backgroundColor: "#4153ab",
        padding: 18,
        borderRadius: 999,
      },
      getStartedText:{
        textAlign:"center",
        fontFamily:"sans-serif",
        fontWeight:"bold",
        fontSize:17,
        color:"#fff"
      }
});
