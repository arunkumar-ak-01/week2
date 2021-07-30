import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from './AppText';
import config from '../app/color/config'

function ListItem({title, subtitle, image}){
    return(
        <View style={styles.container}>
        <View style={styles.card}>
        <Image style={styles.image} source={image} />
        </View>
        <View style={styles.containers}>
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
       
   },
   container:{
       padding:2, 
         borderRadius:100,
         flexDirection:"row",
        
   },
   containers:{
    marginLeft:20,
    justifyContent:"center",
    
    
   },
   image:{
       width:100,
       height:100,
       borderRadius:100,
       
   },
   subtitle:{
       color:config.secondary,
       fontWeight:'bold'
   },
   title:{
       marginBottom:7,
       justifyContent:'center',
       fontSize:30
   }
})


export default ListItem;

