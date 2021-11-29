import React from 'react';
import { View,StyleSheet, Text, StatusBar, FlatList } from 'react-native';

const categories = ['New','Trending','Best seller','Popular','Most Read']

const Category = ({ name,index }) => {
    if(index == 0){
        return (<View style={styles.categoryItem__active}>
            <Text style={styles.categoryItem__name__active}>{name}</Text>
        </View>)
    }
    else{
        return (<View style={styles.categoryItem}>
            <Text style={styles.categoryItem__name}>{name}</Text>
        </View>);
    }
};

const App = () => {
  const renderCategories = ({ item,index }) =><Category name={item} index={index}/>;
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Discover</Text>
        <FlatList style={styles.categories} data={categories} horizontal renderItem={renderCategories} keyExtractor={item => item} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:5,
    backgroundColor:'#fff',
    marginTop: '-5%',
    marginBottom:'-2%'
  },
  text:{
      paddingTop:'6%',
      fontSize: 23,
      fontWeight: 'bold',
      textAlign:'center',
      color:'#141414'
  },
  categories:{
      width: '100%',
      marginHorizontal:5,
      marginVertical: '5%'
  },
  categoryItem:{
      borderRadius: 999,
      marginRight:1,
      borderRadius: 999,
      height:32,
      paddingVertical:2,
      paddingHorizontal:20,
  },
  categoryItem__name:{
      fontSize: 17,
      color:'#141414'
  },
  
  categoryItem__name__active:{
    fontSize:17,
    color: '#7269d6'
  },
  categoryItem__active:{
      borderRadius: 999,
      marginRight:5,
      height:32,
      paddingVertical:2,
      paddingHorizontal:20,
      backgroundColor: 'rgba(150, 144, 209,0.2)',
 }

});

export default App;