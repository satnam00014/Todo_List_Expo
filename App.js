import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Task from './Component/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#223ea2','#657eb2']} style = {styles.gradiantStyle}> 
      <TextInput 
      placeholder='Enter Todo Task here ...'
      placeholderTextColor = '#fff'
      returnKeyType='done'
      style = {styles.inputStyle}/> 
      <Task text = "satnam"/>
      </LinearGradient> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle : {
    margin : 30 ,
    padding: 20,
    color : '#fff',
    fontSize : 28,
  
  },
  gradiantStyle : {
    flex:1,
    position : 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
  },
});
