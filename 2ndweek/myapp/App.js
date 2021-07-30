//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button} from 'react-native';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './components/card';




export default function App() {
  return (

    // <WelcomeScreen />
    // <ViewImageScreen ></ViewImageScreen>
    <Card title="Red jacket for sale!"
    subtitle="$100"
    image={require("./assets/jacket.jpg")} />
    // <SafeAreaView style={styles.container}>
   
    //  <ListingDetailsScreen></ListingDetailsScreen>
      
    // </SafeAreaView>
  );
}








const styles = StyleSheet.create({
    container:{
      flex:0.5,
      backgroundColor:"#f8f4f4",
      
     
      
     // padding: Platform.OS==='android'?StatusBar.currentHeight : 0
     //padding: Platform.OS==='android'?100:0
    },
    text: {
      borderWidth: 0.1,
      paddingLeft: 165,
      paddingTop: 10,
      borderColor: 'black',
      backgroundColor: 'black',
      width:390,
      height:50,
      marginBottom:20,
      fontSize:20,
      borderRadius:100,
      color:'white'
   },
   textt: {
    borderWidth: 0.1,
    paddingLeft: 150,
    paddingTop: 10,
    borderColor: 'black',
    backgroundColor: '#4ECDC4',
    width:390,
    height:50,
    marginBottom:20,
    fontSize:20,
    borderRadius:100
    
 }
    
 
});
