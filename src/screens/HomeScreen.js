import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { FlatList, render, TouchableOpacity } from 'react-native';
import { firebase } from '../Config';
import { doc, getDocs, collection } from "firebase/firestore";
import Firestore from 'firestore';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () =>  {
 
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();


//   const querySnapshot = async (dispatch) =>  await getDocs(collection(db, "restaurants"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
  // const docRef = doc(this.db, "restaurants", );
  // const docSnap = async (dispatch) => await getDoc(docRef);
  
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  
  // const [users, setUsers] = useState([]);
  // const  restaurantsRef = firebase.firestore().collection("restaurants").doc(id).get();

  // useEffect( async () => {
  //   restaurantsRef
  //   .onSnapShot(
  //     querySnapshot => {
  //       const users = []
  //       querySnapshot.for((doc) => {
  //         const { Address, name, photo } = doc.data()
  //         users.push({
  //           id: doc.id,
  //           Address,
  //           name,
  //           photo,
  //         })
  //       })
  //       setUsers(users)
  //     }
  //   )
  // }, [])

    // state = {
    //   restaurant: {
    //     name:""
    //   }
    // }

    // constructor(props) ;{
    //   super(props);
    //   this.getRestaurants();
    //   this.subscriber = Firestore().collection("restaurants").doc
    //   ('30KDBV5fgFTIQKnttVGM').onSnapshot(doc => {
    //     this.setState({
    //       restaurant: {
    //         name:doc.data().name
    //       }
    //     })
    //   })
    // }
    // get = async () => {
    //   const userDocument = await Firestore().collection("restaurants"). 
    //   doc('30KDBV5fgFTIQKnttVGM').get()
    //   console.log(userDocument)
    // }
    // render()

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
{/*     
    <FlatList style={{ flex:1, marginTop:100}}>
      
  data={users}
  numColums={1}
  renderItems={({item}) => (
    <Pressable
    style={StyleSheet.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.itemphoto}>{item.photo} </Text>
        <Text style={styles.itemAddress}>{item.Address} </Text>
        <Text style={styles.itemname}>{item.name} </Text>

      </View>
    </Pressable>
  )}
  </FlatList> */}
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
 
  },
  innerContainer:{
    alignItems:"center",
    flexDirection:'column'
  },
  itemphoto:{
    height:30,
    width:50,
  },
  itemAddress:{
    fontWeight:'200'
  },
  itemname:{
    fontWeight:'200'

  }

});













