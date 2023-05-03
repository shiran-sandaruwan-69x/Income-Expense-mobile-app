import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet } from 'react-native';
import { Container, Content,Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './LoginForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AnimatedLoader } from 'react-native-animated-loader';


export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
 
// componentDidMount(){
//   setTimeout(() => {
//     // this.props.navigation.replace('loginPage')
    
//   }, 3000);
// }

async componentDidMount(){

  const value1 =await AsyncStorage.getItem('a')
  console.log('asycn eka thiyana value eka : '+value1)
  if(value1!=null){
    setTimeout(() => {
      this.props.navigation.navigate('income')
      
    }, 3000);
     

  }else{
      console.log('asycn storage eka monawath na bn')
      setTimeout(() => {
        // this.props.navigation.replace('')
        this.props.navigation.replace('loginPage')
        
      }, 3000);


     
  }

}


  render() {

   
    return (
      <ImageBackground style={{flex:1}} source={require('../assets/white-minimal-background_1393-354.jpg')}>
      <View style={styles.brandView}>
           <Icon name={"location-sharp"} style={styles.Icon1}/>
           <Text name='vision2' style={styles.brandViewText}>Vision Go </Text>
           <Text style={styles.brandViewText1}>සාදරයෙන් පිළිගනිමු</Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text></Text>
           <Text name='vision2' style={styles.brandViewText1}>developed by / sadaruwanshiran101@gmail.com</Text>
       </View> 
      </ImageBackground>
    );
  }
}
const styles=StyleSheet.create({
  Icon1:{
    color:'#00acee',
     fontSize:80,
     textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 15,
  textShadowColor: '#00acee',
 },
 brandView:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',

 },
 brandViewText:{
     color:'#00acee',
     fontSize:24,
     fontWeight:'bold',
     textTransform: 'uppercase',
     textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 15,
  textShadowColor: '#00acee',
 },
 brandViewText1:{
  color:'#4267b2',
  fontSize:18,
  fontWeight:'bold',
  textTransform: 'uppercase',
  textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 15,
  textShadowColor: '#4267b2',
},
shadowB:{
  shadowOffset:{width:1,height:10},
  shadowOpacity:0.4,
  shadowRadius:3,
  elevation:15
}
});