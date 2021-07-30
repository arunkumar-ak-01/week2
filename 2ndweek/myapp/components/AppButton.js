//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import config from '../app/color/config'
//import WelcomeScreen from './screens/WelcomeScreen';

function AppButton({title,onPress, color="primary"}){
   return(
      <TouchableOpacity
      style={[styles.container, {backgroundColor:config[color]}]}
      onPress={onPress}>
      
      <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   )
}




export default AppButton;


const styles = StyleSheet.create({
    container:{
    borderRadius:25,
     justifyContent:'center',
     alignItems:'center',
     padding:15,
     width:"115%",
     marginVertical:10
    
    },
    text:{
       color:Colors.white,
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
    }
   
   
 
 
});
