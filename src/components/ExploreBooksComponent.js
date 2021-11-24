// import React, { useState } from 'react';
// import { SafeAreaView,Image, StyleSheet, Text, View } from 'react-native';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';

// export default function ExploreBooksComponent() {
//   const [books,setBook] = useState([
//         {
//             "id":1,
//             "title":"There There",
//             "author":"Tummy Orange",
//             "cover":"https://images.penguinrandomhouse.com/cover/9780525436140"    
//         },
//         {
//             "id":2,
//             "title":"The great gatsby",
//             "author":"Scott Fitzgerald",
//             "cover":"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"    
//         },
//         {
//             "id":3,
//             "title":"Ugly Love",
//             "author":"Colleen Hoover",
//             "cover":"https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476753188/ugly-love-9781476753188_lg.jpg"    
//         },
//         {
//             "id":4,
//             "title":"Room",
//             "author":"Emma Donoghue",
//             "cover":"https://evoke.ie/wp-content/uploads/2020/01/51AlO2Ak0VL.jpg"    
//         }
//   ])
//   const Book = ({cover})=>(
//     <View style={styles.bookItem}>
//         <Image source={{ uri: cover }} style={styles.bookItem__image}/>
//     </View>
//   );
//   const renderBook = ({book})=><Book cover={book.cover}/>
//   return (
//     <SafeAreaView style={styles.container}>
//         <FlatList data={books} renderItem={renderBook} />            
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingHorizontal:15,
//         paddingTop: 50
//     },
    
//     viewBooks:{
//         flexGrow:1,
//         height:0,
//         display:'flex',
//         padding:'2%',
//         width:'100%',
//     },
//     bookItem:{
//         marginHorizontal:10,
//         flexGrow:0,
//         width:'40%',
//         borderRadius:5,
//         marginVertical:5,
//         height:280,
//     },
//     bookItem__image:{
//         borderRadius:5,
//         width:'98%',
//         marginTop:'1.3%',
//         height:'80%'
//     },
//     bookItem__title:{
//         fontSize:18,
//         fontFamily:'sans-serif',
//         fontWeight:"bold",
//         color:'#000',
//         marginBottom:'-2%',
//     },
//     bookItem__author:{
//         fontSize:15,
//         fontFamily:'sans-serif',
//         color:'#8f8b8b'
//     }
// });

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
// import { SafeAreaView,Image, StyleSheet, Text, View } from 'react-native';


const Books = [
    {
        "id":1,
        "title":"There There",
        "author":"Tummy Orange",
        "cover":"https://images.penguinrandomhouse.com/cover/9780525436140"    
    },
    {
        "id":2,
        "title":"The great gatsby",
        "author":"Scott Fitzgerald",
        "cover":"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"    
    },
    {
        "id":3,
        "title":"Ugly Love",
        "author":"Colleen Hoover",
        "cover":"https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781476753188/ugly-love-9781476753188_lg.jpg"    
    },
    {
        "id":4,
        "title":"Room",
        "author":"Emma Donoghue",
        "cover":"https://evoke.ie/wp-content/uploads/2020/01/51AlO2Ak0VL.jpg"    
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
 
const Book = ({ cover,title,author }) => (
  <View style={styles.bookItem}>
    <Image source={{ uri: cover }} style={styles.bookItem__image}/>
    <Text style={styles.bookItem__title}>{title}</Text>
    <Text style={styles.bookItem__author}>{author}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Book cover={item.cover} title={item.title} author={item.author}/>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={Books} horizontal renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingHorizontal:15,
//         paddingTop: 50
//     },
    
//     viewBooks:{
//         flexGrow:1,
//         height:0,
//         display:'flex',
//         padding:'2%',
//         width:'100%',
//     },
//     bookItem:{
//         marginHorizontal:10,
//         flexGrow:0,
//         width:'40%',
//         borderRadius:5,
//         marginVertical:5,
//         height:280,
//     },
//     bookItem__image:{
//         borderRadius:5,
//         width:'98%',
//         marginTop:'1.3%',
//         height:'80%'
//     },
//     bookItem__title:{
//         fontSize:18,
//         fontFamily:'sans-serif',
//         fontWeight:"bold",
//         color:'#000',
//         marginBottom:'-2%',
//     },
//     bookItem__author:{
//         fontSize:15,
//         fontFamily:'sans-serif',
//         color:'#8f8b8b'
//     }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  bookItem: {
    marginHorizontal:10,
    width:175,
    borderRadius:5,
    marginVertical:5,
    height:280,
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
  }
});

export default App;