import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView  } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Task from './Component/Task';

export default function App() {
  const [task, setState] = useState();
  const [taskList, setTaskList] = useState([]);

  const changeText = (value)=>{
    console.log(value)
  }

  const createTask = ()=>{
    if(task !== '' || task != null){
      console.log("Task is : " + task)
      setTaskList([...taskList,task])
      console.log(taskList)
      setState(null)
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskList(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#223ea2','#657eb2']} style = {styles.gradiantStyle}> 
      <TextInput 
      placeholder='Enter Todo Task here ...'
      placeholderTextColor = '#fff'
      returnKeyType='done'
      onSubmitEditing = {()=>createTask()}
      onChangeText = {(text)=>setState(text)}
      value = {task}
      style = {styles.inputStyle}/> 
      {
            taskList.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
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
