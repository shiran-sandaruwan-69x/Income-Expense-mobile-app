import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginForm from './components/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import Loader from './components/Loader'
import { createStackNavigator } from '@react-navigation/stack';
import userRegister from './components/userRegister';
import incomeForm from './components/incomeForm';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName='loader' headerMode='none'>
         <Stack.Screen name="loader" component={Loader} /> 
        <Stack.Screen name="loginPage" component={LoginForm} />
       <Stack.Screen name='register' component={userRegister} headerMode='true'/>  
       <Stack.Screen name="income" component={incomeForm} />
       </Stack.Navigator>
      </NavigationContainer>
    
    )
  }
}


