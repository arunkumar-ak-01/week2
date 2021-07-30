import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, Image} from 'react-native';

import config from '../app/color/config'

function Card({title, subtitle, image}){
    return(
        
        <View style={styles.card}>
       
        <Image style={styles.image} source={image} />
        
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
</View>
    )
}


const styles = StyleSheet.create({
   card:{
       borderRadius: 10,
       backgroundColor: "white",
       marginTop:50,
       overflow:"hidden",
       width:"95%",
       marginLeft:10
   },
   container:{
       padding:20,
      
   },
   image:{
       width:"100%",
       height:200,
       borderTopRightRadius:10,
       borderTopLeftRadius:10
   },
   subtitle:{
       color:config.secondary,
       fontWeight:'bold'
   },
   title:{
       marginBottom:7
   }
})


export default Card;

