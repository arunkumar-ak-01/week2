import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button,Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../../components/AppText';
import ListItem from '../../components/ListItem';


import config from '../color/config';


function ListingDetailsScreen(){
    return(
        <View>
         <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
          <View style={styles.container}>
             <Text style={styles.title}>Red jacket for sale!</Text>
             <Text style={styles.price}>$100</Text>
              <View styles={styles.user}>
               <ListItem 
               image={require("../../assets/jacket.jpg")}
               title="Arun"
               subtitle="5Listings"></ListItem>
              
              </View>

          </View>
         
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:100,
        backgroundColor:"white",
        marginBottom:20,
        overflow:"hidden"
    },
    container:{
        padding:20,
        borderRadius:100,
        backgroundColor:"white"
    },
    image:{
        width:"100%",
        height:300,
        borderTopRightRadius:100,
        borderTopLeftRadius:100
    },
    subtitle:{
        color:config.secondary,
        fontWeight:'bold'
    },
    title:{
        marginBottom:7,
        color:"black"
    },
    price:{
        color:"#4ECDC4"
    }
})

export default ListingDetailsScreen;