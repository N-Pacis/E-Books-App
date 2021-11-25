import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import * as Progress from 'react-native-progress';

const Books = [
  {
    "id":1,
    "title":"Room",
    "author":"Emma Donoghue",
    "cover":"https://evoke.ie/wp-content/uploads/2020/01/51AlO2Ak0VL.jpg"    
  },
    {
      "id":2,
      "title":"Ugly Love",
      "author":"Colleen Hoover",
      "cover":"https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476753188/ugly-love-9781476753188_lg.jpg"    
    },
    {
        "id":3,
        "title":"The great gatsby",
        "author":"Scott Fitzgerald",
        "cover":"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"    
    },
    {
      "id":4,
      "title":"There There",
      "author":"Tummy Orange",
      "cover":"https://images.penguinrandomhouse.com/cover/9780525436140"    
  },
    {
        "id":5,
        "title":"Dark Rise",
        "author":"C.S Pacat",
        "cover":"https://i.harperapps.com/covers/9780062946140/x190.jpg"
    },
    {
        "id":6,
        "title":"Touch",
        "author":"Claire North",
        "cover":"https://images-na.ssl-images-amazon.com/images/I/71SwibMnp-L.jpg"
    },
    {
        "id":7,
        "title":"Beyond The Moon",
        "author":"Catherine Taylor",
        "cover":"https://images-na.ssl-images-amazon.com/images/I/61OEvJKs3rL.jpg"
    }
];
const ContinueReading = [
    {
      "id":1,
      "title":"Dune Messiah",
      "author":"Frank Herbert",
      "cover":"https://images4.penguinrandomhouse.com/cover/9780593201732",
      "progress":0.8    
  },
  {
      "id":2,
      "title":"Baby's First Felony",
      "author":"John Straley",
      "cover":"https://images4.penguinrandomhouse.com/cover/9781641290630",
      "progress":0.3    
  },
  {
    "id":3,
    "title":"Lady Audley's Secret",
    "author":"Mary Elizabeth Braddon",
    "cover":"https://images4.penguinrandomhouse.com/cover/9781984854193",
    "progress":0.1
  },
  {
      "id":4,
      "title":"Ugly Love",
      "author":"Colleen Hoover",
      "cover":"https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476753188/ugly-love-9781476753188_lg.jpg",
      "progress":0.7    
  }
]
 
const Book = ({ cover,title,author }) => (
  <View style={styles.bookItem}>
    <Image source={{ uri: cover }} style={styles.bookItem__image}/>
    <Text style={styles.bookItem__title}>{title}</Text>
    <Text style={styles.bookItem__author}>{author}</Text>
  </View>
);

const ReadingBook = ({ cover,title,author,progress }) => (
  <View style={styles.ReadingBookItem}>
    <Image source={{ uri: cover }} style={styles.ReadingBookItem__image}/>
    <View style={styles.bookDescription}>
      <Text style={styles.ReadingBookItem__title}>{title}</Text>
      <Text style={styles.ReadingBookItem__author}>{author}</Text>
      <Progress.Bar progress={progress} width={130} height={5} borderRadius={5} borderColor={'transparent'} unfilledColor={'#e8eaed'} />
    </View>
  </View>
);

const App = () => {
  const renderBooks = ({ item }) => <Book cover={item.cover} title={item.title} author={item.author}/>;
  const renderReadingBooks = ({ item }) => <ReadingBook cover={item.cover} title={item.title} author={item.author} progress={item.progress}/>;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <FlatList style={styles.Books}data={Books} horizontal renderItem={renderBooks} keyExtractor={item => item.id} />
      <Text style={styles.continueReading}>Continue Reading</Text>
      <FlatList data={ContinueReading} horizontal renderItem={renderReadingBooks} keyExtractor={item=>item.id}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:5,
    marginTop: StatusBar.currentHeight || 0
  },
  Books:{
    height:140
  }, 
  bookItem: {
    marginHorizontal:10,
    width:175,
    borderRadius:5,
    marginVertical:5,
    height:280,
    flex:2
  },
  bookItem__image: {
    width:'100%',
    borderRadius:5,
    height:'80%'
  },
  bookItem__title:{
    marginTop:3,
    fontSize:18,
    fontFamily:'sans-serif',
    opacity:0.9,
    marginLeft:3,
    fontFamily:'sans-serif',
    fontWeight:"bold",
    color:'#161717',
    marginBottom:2
  },
  bookItem__author:{
    fontSize:15,
    marginLeft:3,
    fontFamily:'sans-serif',
    fontWeight:"bold",
    opacity:0.8,
    color:'#9a9c9c'
  },
  continueReading:{
    fontSize:18,
    fontFamily:'sans-serif',
    marginLeft:12,
    marginBottom:4,
    fontWeight:'bold'
  },
  ReadingBookItem: {
    marginHorizontal:10,
    width:360,
    paddingRight:17,
    borderRadius:7,
    flex:1,
    flexDirection:'row',
    marginRight:15,
    marginVertical:5,
    height:210,
    shadowColor: '#dedfe0',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 7,  
    elevation: 1
  },
  ReadingBookItem__image: {
    width:'60%',
    marginRight:10,
    borderRadius:5,
    height:'99%',
    marginTop:2
  },
  ReadingBookItem__title:{
    marginTop:3,
    fontSize:20,
    fontFamily:'sans-serif',
    opacity:0.9,
    marginLeft:1,
    fontFamily:'sans-serif',
    fontWeight:"bold",
    color:'#161717',
    marginBottom:2
  },
  ReadingBookItem__author:{
    fontSize:16,
    marginLeft:3,
    fontFamily:'sans-serif',
    fontWeight:"bold",
    opacity:0.8,
    color:'#9a9c9c',
    marginBottom:10
  },
  bookDescription:{
    width:'40%',
    marginTop:50
  }
});

export default App;