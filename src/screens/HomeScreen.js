import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';



const HomeScreen = () =>  {
 
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
  
    <View style={styles.container}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.searchbar}
    />
    <Text style={styles.h1}>Popular Foods</Text>
    <TouchableOpacity>
      <Text  style={{ width: 60, height: 60, position:"absolute", bottom:80, right:102,  fontSize: 20, fontWeight: "400", }}>Pizza</Text>
    <Image
      source={{uri: 'https://d2mekbzx20fc11.cloudfront.net/uploads/pizzas-568cbd2ca6e3ff38a7d3517f5a324dccdce099125f0c4b8bcd6647f4f18b4e3f.png'}}
      style={{ width: 60, height: 60, position:"absolute", bottom:140, right:110 }}

    />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text  style={{ width: 60, height: 60, position:"absolute", bottom:80, right:12,  fontSize: 20, fontWeight: "400", }}>
      Burger</Text>
    <Image
      source={{uri: 'https://toppng.com/uploads/preview/big-burger-11562902444grmy1oetg2.png'}}
      style={{ width: 60, height: 60, position:"absolute", bottom:140, right:20 }}

    />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text  style={{ width: 60, height: 60, position:"absolute", bottom:80, left:22,  fontSize: 20, fontWeight: "400", }}>
      Indian</Text>
    <Image
      source={{uri: 'https://toppng.com/uploads/preview/indian-food-images-11549470671ebsxiapmip.png'}}
      style={{ width: 60, height: 60, position:"absolute", bottom:140, left:20 }}

    />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text  style={{ width: 60, height: 60, position:"absolute", bottom:80, left:112,  fontSize: 20, fontWeight: "400", }}>
      Pasta</Text>
    <Image
      source={{uri: 'https://toppng.com/uploads/preview/pasta-2-11550712027pkrt0kdmlk.png'}}
      style={{ width: 60, height: 60, position:"absolute", bottom:140, left:110 }}

    />
    </TouchableOpacity>
    </View>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    position:"absolute",
    top:"1%",
    width:"100%"
  },
  h1: {
    position:"absolute",
    top:"10%",
    left:"2%",
    fontSize: 20,

    fontWeight: "bold",
    
  },
  
  fill: {
    flex: 1,
    margin: 16,
    color: "black",
    fontSize: 20,
 
  },
  button: {
    backgroundColor: 'red',
    margin: 26,
    padding: 10,
  

  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: 414,
    height:896,
  },
  Header: {
    color: "green",
    fontSize: 40,

    fontWeight: "bold",
    textAlign: "center",
    position: 'absolute',
    right: 40,
    top: 35,
    fontFamily: "Cochin",
    textAlignVertical: 'top',
 
  }
});













