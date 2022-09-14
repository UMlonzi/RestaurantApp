import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ImageBackground } from 'react-native'
import React, { useRef, useState} from 'react'
import { FirebaseAuthApplicationVerifier, FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import {firebaseConfig }from '../Config'
import firebase from 'firebase/compat/app'
const image = { uri: "https://i.pinimg.com/736x/09/81/d9/0981d9bc18bf3c6847c5d1f3d07fdb80.jpg" };

const Otp = () => {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
 const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
  phoneProvider
      .verifyPhoneNumber(phoneNumber)
      .then(setVerificationId);
      setPhoneNumber('');

  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth(),signInWithCredential(credential)
    .then(() => {
      setCode('');
    })
    .catch((error) => {
      alert(error);
    })
    Alert.alert(
      'Login Successful. Find Your Restaurant'
    );
  }

  return (

    <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        />
    <ImageBackground source={image}  style={styles.image}>
    <View style={styles.whiteSheet} />

      <Text style={styles.otp}>
        Sign In using OTP
      </Text>
      <TextInput
        placeholder='Phone Number'
        onChangeText={setPhoneNumber}
        keyboardType='phone-pad'
        autoComplete='tel'
        style={styles.numberText}
      />
      <TouchableOpacity   style={styles.sendVerification} onPress={sendVerification}>
        <Text  style={styles.buttonText}>
          Send Verification
        </Text>
      </TouchableOpacity>
      <TextInput
        placeholder='Confirm code'
        onChangeText={setCode}
        keyboardType='number-pad'
        style={styles.textInput}
      />
          <TouchableOpacity   style={styles.sendCode} onPress={confirmCode}>
        <Text  style={styles.buttonText}>
          Confirm Verification
        </Text>
      </TouchableOpacity>
      </ImageBackground>

    </View>
  )

}

export default Otp

const styles = StyleSheet.create({
  container:{
    // flex:1,
    // backgroundColor:'white',
    // alignItems:'center',
    // justifyContent:'center',
    // height:200,
    //     position:'absolute',
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    paddingTop: 40,
    paddingBottom:20,
    paddingHorizontal:20,
    fontSize:24,
    borderBottomColor:'#fff',
    borderBottomWidth:2,
    marginBottom:20,
    textAlign:'center',
    color:'#fff',
    position: "absolute",
    bottom:-250,
    right:120
    
  },
  sendVerification: {
    padding:20,
    width:200,
    backgroundColor:'rgba(214, 145, 20, 1)',
    borderRadius:10,
    position: "absolute",
    bottom:-150,
    right:100
  },
  sendCode:{
     padding:20,
    width:200,

    backgroundColor:'rgba(214, 145, 20, 1)',
    borderRadius:10,
    position: "absolute",
    bottom:-280,
    right:100
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
  },
  otp:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:20,
    position: "absolute",
    bottom:-20,
    right:80
  },
  image:{
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
    
  },
  numberText:{
    fontSize:24,
    position: "absolute",
    bottom:-80,
    right:125
  },
  whiteSheet: {
    width: '100%',
    height: '15%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
 
});