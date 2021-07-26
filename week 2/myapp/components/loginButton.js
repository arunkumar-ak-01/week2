import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppButton(props) {
  return (
    <View style={[styles.bgcolor, { backgroundColor: props.colors }]}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
  
  text: {
    fontSize: 15,
    color: "black",
    //fontWeight: "bold",
    fontSize:20
  },

  bgcolor: {

    alignSelf:'center',
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 15,
    width: "95%",
    height: "8%",
    alignItems: "center",
    
  },



});