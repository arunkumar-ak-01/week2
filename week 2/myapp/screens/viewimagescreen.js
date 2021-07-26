import React from 'react';
import {  StyleSheet ,Image,View,Text,TouchableOpacity} from 'react-native';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent: 'space-between' }}>
             <View
        style={[styles.box,{backgroundColor: "#4ECDC4",margin:100}]}
      />
       <View
        style={[styles.box,{backgroundColor: "#fc5c65",margin:100}]}
      />
      </View>
      
            <TouchableOpacity onPress={()=>console.log('You have pressed the image ')}>
            <Image  style={styles.image} source={require('../assets/chair.jpg')}></Image>
      </TouchableOpacity>
      </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black',
        width:'100%',
        height:'100%',
       
      },
      image:{
    
        marginBottom:100,
          width:400,
          height:400,
      },
      box: {
        
         marginTop:60, 
        backgroundColor: "#fc5c65",
        width: 50,
        height: 50,
        justifyContent:'space-evenly'

      },
   
     
  
    
})