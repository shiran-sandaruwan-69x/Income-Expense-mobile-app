import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions, outlined,Alert } from 'react-native';
import { NativeBase, Form, Item, Input, Label, Icon, borderColor,Button } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import { backgroundImage } from 'styled-system';
import axios from 'axios';


export default class userRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic:'',
      uName:'',
      address:'',
      email:'',
      password:''
    };
  }

 
  registerPost(){
    
    const valiNic =this.state.nic
    const valiEmail =this.state.email
    const valipass =this.state.password
    const valiUname=this.state.uName
    const valiAddress=this.state.address
    
    // console.log(valipass)
    // console.log(valiNic)

   

    if(valiNic!='' && valipass!='' && valiEmail!='' && valiAddress!='' && valiUname!=''){
      console.log('hari...')
    var url = 'http://192.168.8.188:3210/data/login';
    axios.post(url, {
      nic: this.state.nic,
      uName: this.state.uName,
      uAddress: this.state.address,
      uEmail: this.state.email,
      uPassword: this.state.password,
     
    })
    .then(function (response) {
      console.log(response);
      
     

    })
    .catch(function (error) {
      console.log(error);
     
    });


    Alert.alert(
      "Alert Title",
      "Registation Success .....",
      [
        {
          text: "Cancel",
          onPress: () => console.log(" !"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {console.log("OK Pressed") 
        this.props.navigation.navigate('loginPage')
      }}
      ]
    );


    
   
  }else{
    //errr validation
    Alert.alert(
      "Alert Title",
      "Input Values ...",
      [
        {
          text: "Cancel",
          onPress: () => console.log(" !"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }
  };
  
  // validationRegisterUser(){

  //  console.log(this.state.nic)
  //  console.log(this.state.uName)
  //  console.log(this.state.address)
  //  console.log(this.state.email)
  //  console.log(this.state.password)
  // }


  render() {
    return (
         <KeyboardAvoidingView style={styles.container} showsVerticalScrollIndicator={false}  behavior="padding">
        <ScrollView >   
        <ImageBackground style={{flex:1}} source={require('../assets/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg')}>
        <View style={styles.brandView}>
           <Icon name={"location-sharp"} style={styles.Icon1}/>
           <Text onPress={()=>this.props.navigation.navigate('vision')} name='vision' style={styles.brandViewText}>Vision Go</Text>
       </View>
       <Form>
            <Item fixedLabel  style={{ marginTop:24}}>
              <Label style={{color: '#000000',fontWeight:'bold'}}>nic no :</Label>
              <Input style={{color: '#000000',fontWeight:'bold'}}
              
              value={this.state.nic} onChangeText={(value)=>{
                //    console.log(value);
                   this.setState({
                    nic:value
                   });
               }}
              keyboardType='numeric'
              />
            </Item>
            <Item fixedLabel style={{ marginTop:23}}>
              <Label style={{color: '#000000',fontWeight:'bold'}}>user name :</Label>
              <Input style={{color: '#000000',fontWeight:'bold'}}
              
              
              value={this.state.uName} onChangeText={(value)=>{
                //    console.log(value);
                   this.setState({
                   uName:value
                   });
               }}
              
              />
            </Item>
            <Item fixedLabel style={{ marginTop:23}}>
              <Label style={{color: '#000000',fontWeight:'bold'}}>address :</Label>
              <Input style={{color: '#000000',fontWeight:'bold'}}
              
              value={this.state.address} onChangeText={(value)=>{
                //    console.log(value);
                   this.setState({
                   address:value
                   });
               }}
              
              
              />
            </Item>
            <Item fixedLabel style={{ marginTop:23}}>
              <Label style={{color: '#000000',fontWeight:'bold'}}>email :</Label>
              <Input style={{color: '#000000',fontWeight:'bold'}}
              
              
              value={this.state.email} onChangeText={(value)=>{
                //    console.log(value);
                   this.setState({
                   email:value
                   });
               }}
              
              
              />
            </Item> 
            <Item fixedLabel style={{ marginTop:23}}>
              <Label style={{color: '#000000',fontWeight:'bold'}}>password :</Label>
              <Input style={{color: '#000000',fontWeight:'bold'}}
              
              
              value={this.state.password} onChangeText={(value)=>{
                //    console.log(value);
                   this.setState({
                  password:value
                   });
               }}
              
               secureTextEntry={true}
              />
            </Item>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View style={{height:55,justifyContent:'center',alignItems: 'center'}}>
              <Button rounded style={[styles.loginBtn,styles.shadowBtn,{shadowColor:'#00acee'}]}
              
              onPress={this.registerPost.bind(this)}
              
              >
                  <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:17}}>register now</Text>
              </Button>
          </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </Form>

          </ImageBackground>
             </ScrollView>    
            
        </KeyboardAvoidingView>
    );
  }
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#DFDDD9',
        
        // justifyContent:'center',
        // alignItems:'center'
        },
        Icon1:{
            color:'#000000',
             fontSize:70,
             textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 15,
  textShadowColor: '#00acee',
         },
         brandView:{
            flex:1,
            marginTop:20,
            justifyContent:'center',
            alignItems:'center',
       
           },
           brandViewText:{
               color:'#000000',
               fontSize:18,
               fontWeight:'bold',
               textTransform: 'uppercase',
               textShadowOffset: {width: 1, height: 1},
  textShadowRadius: 15,
  textShadowColor: '#00acee',
           },
     form1:{
         flex: 1,
        //  height:50,
         marginTop:100,
        //  justifyContent: 'center',
        //  alignItems:'center'
     },
     loginBtn:{
        alignSelf: 'center',
        backgroundColor:'#000000',
        width:Dimensions.get('window').width/2,
        justifyContent:'center'
        },
        shadowBtn:{
            shadowOffset:{width:1,height:10},
            shadowOpacity:0.4,
            shadowRadius:3,
            elevation:15
        }  

});