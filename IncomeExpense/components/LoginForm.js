
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions,KeyboardAvoidingView,Alert } from 'react-native';
import { Body, Button, CheckBox, Icon, Input, Item, Label, ListItem } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userpName:'',
        userEmail:'',
        userPassword:'',
        dataA : [],
        
    
    };
    this.getAllData=this.getAllData.bind(this);
  }
 



  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('a', this.state.userEmail)
      await AsyncStorage.setItem('b', this.state.userPassword)
      // console.log('state ekatath set wenawa name eka'+this.state.userpName)
      // await AsyncStorage.setItem('c',this.state.userpName)
      console.log('data saved...!')
      
      console.log(this.state.userEmail);
      console.log(this.state.userPassword);
      const x=this.state.userEmail;
      const y=this.state.userPassword;
      if(x!='' && y!=''){
        this.props.navigation.navigate('income')
      }else{
        Alert.alert(
          "Alert Title",
          "Input Email or password ...",
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
     
     
    } catch (e) {
    console.log('async ekata save une na bn')
    }
  }
  
  getAllData(){

    var url = 'http://192.168.8.188:3210/data/login';
    axios.get(url)
    .then((ambilData) => {
       console.log(ambilData.data);
    //   this.setState({
    //     dataA: ambilData.data,
    //   }) 

    ambilData.data.map((item, index)=>{
        // var arrayku = ['Nama: ',item.uName,', Usia: ', item.uEmail, ' th.'].join(' ');
        // this.state.userpName=item.uName
     
        if(item.uEmail.indexOf(this.state.userEmail) !== -1 && item.uPassword.indexOf(this.state.userPassword) !== -1){
           console.log(item.uEmail+'mu hari innawa')
            this.state.userEmail=item.uEmail
            this.state.userPassword=item.uPassword
            
             
          //  console.log('data base ekan enawa name eka '+item.uName)
          //  console.log('state ekatath set wenawa name eka'+this.state.userpName)
           
        }
           else{
          //  console.log('fail...');
         } 
     
      })

    })
    
   
    
    



  
    // axios.get('http://192.168.8.188:3210/data/login',{method:'GET'})
    // .then((ambilData) => {
    //     const c=JSON.stringify(ambilData.data)
    //     console.log(c.nic);
    //   this.setState({
    //     dataA: ambilData.data,

    //   }) 
    // })
    
  
  
     
   
}  

      
  loginInputText(){
    
    // const userDetails={
    //     id:this.state.userEmail
    // }


  }
   
 
  getData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('a')
      const value2 = await AsyncStorage.getItem('b')
      // const value3 = await AsyncStorage.getItem('c')
      if(value1 !== null) {
         console.log('user email is : '+value1);
         console.log('user email is : '+value2);
        //  console.log('user async storage eka   : '+value3);
      }else{
        console.log('please enter email ');
      }
    } catch(e) {
      // error reading value
    }
  }

  
  render() {
   

    // this.state.dataA.map((item, index)=>{
    //     // var arrayku = ['Nama: ',item.uName,', Usia: ', item.uEmail, ' th.'].join(' ');
        
     
    //     if(item.uEmail.indexOf(this.state.userEmail) !== -1 && item.uPassword.indexOf(this.state.userPassword) !== -1){
    //         console.log('hari bn..');
            
    //         this.props.navigation.navigate('income')
    //     }
    //        else{
    //        console.log('fail...');
    //      } 
     
    //   })
     
    
      
    return (
        //context start
        <KeyboardAvoidingView style={styles.container} showsVerticalScrollIndicator={false}  behavior="padding">
      <ScrollView >
      <ImageBackground style={styles.BackgroundImg} source={require('../assets/arnold-antoo-dvqFGckKF1Y-unsplash.jpg')}>
       <View style={styles.brandView}>
           <Icon name={"location-sharp"} style={styles.Icon1}/>
           <Text onPress={()=>this.props.navigation.navigate('vision')} name='vision' style={styles.brandViewText}>Vision Go</Text>
       </View>
       </ImageBackground>
       {/* bottomView */}
       
       <View style={styles.bottomView}> 
           {/* welcomeView */} 
           <View style={{padding:40}}>
            <Text style={{color:'#4632A1',fontSize:30,fontWeight:'bold'}}>WelCome</Text>
            <Text onPress={()=>{
                console.log('hello');
                this.props.navigation.navigate('register')
            }}>don't have an account ? <Text style={{color:'red',fontStyle:'italic'}}>{' '}Register Now</Text> </Text>
           
           {/* form input view */}
            
           <View style={{marginTop:50}}></View>
           
           <Item floatingLabel style={{borderColor:'#4632A1'}}>
               <Label>Email</Label>
               <Input value={this.state.userEmail}  onChangeText={(value)=>{
                   console.log(value);
                   this.setState({
                       userEmail:value
                   })
               }}  />
               <Icon name={"checkmark"} style={{color:'#4632A1'}}></Icon>
           </Item>
           
           <Item floatingLabel style={{borderColor:'#4632A1',marginTop:20}}>
               <Label>Password</Label>
               <Input value={this.state.userPassword} onChangeText={(value)=>{
                //    console.log(value);
                   this.setState({
                   userPassword:value
                   });
               }}  secureTextEntry={true} />
               <Icon name={"eye"} style={{color:'#4632A1'}}></Icon>
           </Item>
            
             
          {/* forgot password & rember me */}
          
          <View style={styles.forGetPassswordView}>
             
            <View style={{flex: 1,marginLeft:-20}}>
                <ListItem noBorder>
                    {/* <CheckBox checked={true} color='#4632A1'/> */}
                    <Body>
                       
                        <Text style={{color: '#8f9195',alignSelf:'flex-start'}}> {' '}</Text>
                    </Body>
                </ListItem>
            </View>
             
            <View style={{flex: 1,marginRight:-20}}>
                <ListItem noBorder>
                    
                    <Body>
                        <Text style={{color: '#8f9195',alignSelf:'flex-end'}}>Forgot Password</Text>
                    </Body>
                </ListItem>
            </View>


          </View>
           
          {/* Login Button And Socal Login Icon */}
         
          <View style={{height:100,justifyContent:'center',alignItems: 'center'}}>
              <Button onPress={this.getAllData.bind(this),this.storeData.bind(this)} rounded style={[styles.loginBtn,styles.shadowBtn,{shadowColor:'#00acee'}]}>
                  <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:17}}>Login</Text>
              </Button>
          </View>
             
          <View style={{flex: 1}}>
              {/* <Text style={{textAlign:'center'}}>or login width</Text> */}
            {/* socal Button */}
            <View style={styles.socalLoginView}> 
            <Button icon style={[styles.shadowBtn,{backgroundColor:'#4267b2'}]} rounded>
                <Icon type='MaterialCommunityIcons' name={"facebook"} style={{color:'#ffffff'}}></Icon>
            </Button>
            <Button icon style={[styles.shadowBtn,{backgroundColor:'#00acee'}]} rounded>
                <Icon type='MaterialCommunityIcons' name={"twitter"} style={{color:'#ffffff'}}></Icon>
            </Button>
            <Button icon style={[styles.shadowBtn,{backgroundColor:'#db4a39'}]} rounded>
                <Icon type='MaterialCommunityIcons' name={"google-plus"} style={{color:'#ffffff'}}></Icon>
            </Button>    


            </View>

          </View>
         

           </View>

       </View>
        
       {/* <View style={{flexDirection:'column',alignItems:'center'}}>
{dataMongo}
</View> */}

      </ScrollView>
      </KeyboardAvoidingView>
      //context end

      

    );
  }
}
 
const styles=StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'#ffffff'
    // justifyContent:'center',
    // alignItems:'center'
    },

    loginText:{
        fontSize:20
    },
     
    BackgroundImg:{
        height:Dimensions.get('window').height/ 2.5,
    },

    Icon1:{
       color:'#ffffff',
        fontSize:70
    },
    brandView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',

    },
    brandViewText:{
        color:'#ffffff',
        fontSize:18,
        fontWeight:'bold',
        textTransform: 'uppercase'
    },
    bottomView:{
    flex:1.5,
    backgroundColor:'#ffffff',
    bottom: 50,
    borderTopStartRadius:60,
    borderTopEndRadius:60,

    },
    forGetPassswordView:{
      height:50,
      marginTop:20,
      flexDirection:'row',



    },
    loginBtn:{
    alignSelf: 'center',
    backgroundColor:'#4632A1',
    width:Dimensions.get('window').width/2,
    justifyContent:'center'
    },
    socalLoginView:{
        flexDirection: 'row',
        flex:1,
        justifyContent:'space-around',
        marginTop:20
    },
    shadowBtn:{
        shadowOffset:{width:1,height:10},
        shadowOpacity:0.4,
        shadowRadius:3,
        elevation:15
    }
    });

    