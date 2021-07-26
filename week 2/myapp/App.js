import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, ProgressViewIOSComponent} from 'react-native';
import WelcomeScreen from './screens/welcomescreen';
import ViewImageScreen from './screens/viewimagescreen';
import LoginButton from './components/loginButton';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {

  console.log(useDimensions())
  console.log(useDeviceOrientation());
const {landscape} = useDeviceOrientation()


  return (
    <SafeAreaView style={styles.container}>
      
       <WelcomeScreen /> 
      {/* <ViewImageScreen /> */}
       {/* <LoginButton></LoginButton>  */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:StatusBar.currentHeight+3,
 
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    alignContent:'stretch',
   
  },
});
