import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import homeImage from '../../assets/Knowledge-rafiki.png'

export default function HomeComponent({navigation}) {
  const goToNextPage = ()=>{
      navigation.push("Explore Books")
  }

  const goToSignUp = ()=>{
      navigation.push("Register")
  }

  return (
    <View style={styles.container}>
        <Image source={homeImage} style={styles.homeImage}/>
        <Text style={styles.homeText}>Create a personal account</Text>  
        <Text style={styles.homeParagraph}>Join over 2000+ accounts publishing books worldwide. Together we can spread the culture of reading as a primary source of information.</Text>
        <View style={styles.buttonContainer}>
            <Text style={styles.skipPage} onPress={goToSignUp}>Skip</Text>
            <Text style={styles.nextPage} onPress={goToNextPage}>Next</Text>
        </View>
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
        marginRight:5  
      },
      buttonContainer:{
          flex:2,
          padding:0,
          marginTop:'30%',
          flexDirection:'row'
      },
      nextPage:{
          width:"15%",
          color:"#4153ab",
          fontWeight:"bold",
          marginRight:"30%",
          fontSize:16
      },
      skipPage:{
          width:"83%",
          marginLeft:"4%",
          fontSize:16,
          color:"#161617"
      }
});
