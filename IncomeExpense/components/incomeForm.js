import React, { Component } from 'react';
import { View,StyleSheet,ScrollView,ImageBackground,Dimensions,Alert  } from 'react-native';
import { Button,Container, Header, Title,  Left, Right, Body, Icon,Text ,Content,Item,Label,Input,Fab  } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { backgroundImage, style } from 'styled-system';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class incomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      email:'',
      userName:'',
      spend:'',
      inpuSalary:'', 
      forYou:0,
      bank:0,
      otherPayment:0,
      xInput:'9000',
      arrayWord:[0,0],
      oldarry:[0]
      // ithuruGana:0,
    };
  }

  //------------auto load------------

  async componentDidMount(){

  const value1 =await AsyncStorage.getItem('a')
  const value2 =await AsyncStorage.getItem('gTotal')
  const chart = await AsyncStorage.getItem('chart')
  console.log('asycn eka thiyana value eka : '+value1)
  if(value2!==null){
    // setTimeout(() => {
      this.setState({inpuSalary:value2})
      this.setState({email:value1})
      this.setState({arrayWord:JSON.parse(chart)})
      console.log(value2);
    // }, 3000);
     

  }else{
      console.log('asycn storage eka monawath na bn')
      this.setState({inpuSalary:''})
      this.setState({arrayWord:[0,0]})
      // setTimeout(() => {
        // this.props.navigation.replace('')
        
        
      // }, 3000);


     
  }

}

  //------------------------
   
  //-------------------------------array-----------
     
      arrayAdd(){
        // const x= this.state.spend;
        // const y=this.state.inpuSalary;
     
        
        // const viyadama=y-x;
      //  console.log(xy);
        // for(var i=0; i<1000; i++ ){
        // xy[1+i]=viyadama;
        // }
          
        
        // xy.push(viyadama); 
        
      
         
      }
  //------------------------------



   generateSalary(){

    const x=this.state.inpuSalary
      const y=this.state.spend
    console.log(x)
    console.log(y)
    if(x!='' && y!=''){

      const getInput=parseInt(x);
      const getSpend=parseInt(y);

      const x= this.state.spend;
      const y=this.state.inpuSalary;
   
      const viyadama=y-x;
      //------array---------
       
      //----------------
      const family=viyadama/2;
      const twoDecimalFamily=family.toFixed(2);
      this.setState({forYou:twoDecimalFamily})
      console.log('family and for you :'+family)
      const forYou=viyadama-family;
      // this.setState({inpuSalary:viyadama.toString()})
      const x2=forYou/3;
      const twoDecimalBank=x2.toFixed(2);
      this.setState({bank:twoDecimalBank})
      console.log('bank deposit :'+twoDecimalBank);
      
      const x3=forYou-x2;
      const twoDecimalOtherPayment=x3.toFixed(2);
      this.setState({otherPayment:twoDecimalOtherPayment})
      console.log('other payment :'+twoDecimalOtherPayment);


     
    }else{

     
      Alert.alert(
        "Alert Title",
        "input your values ...",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

    }



 

   }






  getData = async () => {
 

      try {
        const value1 = await AsyncStorage.getItem('a')
        const value2 = await AsyncStorage.getItem('b')
  
        if(value1 !== null) {
           console.log('user email is : '+value1);
           this.setState({email:value1})
          //  console.log('user password is : '+value2);
  
        }else{
          console.log('please enter email & password');
        }
      } catch(e) {
        // error reading value
      }

    
   
  }


  getGData = async () => {
 

    try {
      const value1 = await AsyncStorage.getItem('a')
      const value2 = await AsyncStorage.getItem('gSalary')
      const value3 = await AsyncStorage.getItem('gPend')
      const value4 = await AsyncStorage.getItem('gTotal')
      const chart = await AsyncStorage.getItem('chart')
      console.log(JSON.parse(chart))
      this.setState({arrayWord:JSON.parse(chart)})
      if(value2 !== null) {
         console.log('user email is : '+value1);
         console.log('user gSalary is : '+value2);
         console.log('user gPend is : '+value3);
         console.log('user gTotal is : '+value4);
         this.setState({email:value1})
        //  console.log('user password is : '+value2);

      }else{
        console.log('please enter email & password');
      }
    } catch(e) {
      // error reading value
    }

  
 
}


removeValue = async () => {
  try {
   
    // const value1 = await AsyncStorage.getItem('a')
    // const value2 = await AsyncStorage.getItem('b')

    const value3 = await AsyncStorage.getItem('gSalary')
    const value4 = await AsyncStorage.getItem('gPend')
    const value5 = await AsyncStorage.getItem('gTotal')
    const value6 = await AsyncStorage.getItem('chart')
//  const value5 = await AsyncStorage.getItem('gEmail')
   
    // if(value1 !== null) {
      //  console.log('bye..... '+value1);
      //  console.log('bye..... '+value2);
       console.log('bye..... '+value3);
       console.log('bye..... '+value4);
       console.log('bye..... '+value5);
       console.log('bye..... '+JSON.parse(value6));

      //  await AsyncStorage.removeItem('a')
      //  await AsyncStorage.removeItem('b')
       await AsyncStorage.removeItem('gSalary')
       await AsyncStorage.removeItem('gPend')
       await AsyncStorage.removeItem('gTotal')
       await AsyncStorage.removeItem('chart')
        this.setState({arrayWord:[0,0]})
        this.setState({inpuSalary:''})
         this.setState({spend:''})
      //  await AsyncStorage.removeItem('gEmail')
    // }else{
    //   console.log('please login..');
    // }
  } catch(e) {
    // remove error
  }

 
}


  
  removeValueAndLogOut = async () => {
    try {
     
      const value1 = await AsyncStorage.getItem('a')
      const value2 = await AsyncStorage.getItem('b')

      const value3 = await AsyncStorage.getItem('gSalary')
     
      const value4 = await AsyncStorage.getItem('gPend')
      
      const value5 = await AsyncStorage.getItem('gTotal')
      const value6 = await AsyncStorage.getItem('chart')
  //  const value5 = await AsyncStorage.getItem('gEmail')
     
      // if(value1 !== null) {
         console.log('bye..... '+value1);
         console.log('bye..... '+value2);
         console.log('bye..... '+value3);
         console.log('bye..... '+value4);
         console.log('bye..... '+value5);
         console.log('bye..... '+JSON.parse(value6));
        //  console.log('bye..... '+value5);
         await AsyncStorage.removeItem('a')
         await AsyncStorage.removeItem('b')
         await AsyncStorage.removeItem('gSalary')
         await AsyncStorage.removeItem('gPend')
         await AsyncStorage.removeItem('gTotal')
         await AsyncStorage.removeItem('chart')
         this.setState({arrayWord:[0,0]})
         this.props.navigation.navigate('loginPage')
         console.log('log out and delete account ..');
         this.props.navigation.navigate('loginPage')
         this.setState({inpuSalary:''})
         this.setState({spend:''})
      this.setState({forYou:0})
      this.setState({bank:0})
      this.setState({otherPayment:0})
        //  await AsyncStorage.removeItem('gEmail')
      // }else{
      //   console.log('please login..');
      // }
    } catch(e) {
      // remove error
    }
  
   
  }


 
  storeData = async (value) => {
    try {
      const h1=this.state.inpuSalary
      const h2=this.state.spend
     if(h1!='' && h2!=''){
      const x=parseInt(h1)
      const y=parseInt(h2)
      const xy=[0,]
      const z=x-y;
      console.log(x-y)
      const n=z/x;
      const m=n*100;
      xy.push(m);
      console.log(z)
      // await AsyncStorage.setItem('a', this.state.email)
      await AsyncStorage.setItem('gSalary', this.state.inpuSalary)
      await AsyncStorage.setItem('gPend', this.state.spend)
      await AsyncStorage.setItem('gTotal', z.toString());
      await AsyncStorage.setItem('chart', JSON.stringify(xy));
      


      var url = 'http://192.168.8.188:3210/data/login/spend';
      axios.post(url, {
        email: this.state.email,
        salary: x,
        spend: y,
        chart: m
       
       
      })
      .then(function (response) {
        console.log(response);
        
       
  
      })
      .catch(function (error) {
        console.log(error);
       
      });
      console.log('data saved...!')
      this.setState({inpuSalary:z.toString()})
      this.setState({spend:''})

      Alert.alert(
        "Alert Title",
        "success ...",
        [
          {
            text: "Cancel",
            onPress: () => console.log(" !"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );


     }else{

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




      // console.log('state ekatath set wenawa name eka'+this.state.userpName)
      // await AsyncStorage.setItem('c',this.state.userpName)
     
      // console.log(this.state.userEmail);
      // console.log(this.state.userPassword);
     
     
    } catch (e) {
    console.log('async ekata save une na bn')
    }
   console.log('email eka : '+this.state.email);
    //-------------------------------------------------------------------------------------
    
    



    //---------------------------------------------------------------------------------------------

  }


  render() {
    return (
      <ScrollView >
      <Container style={{flex:1}}>
        <Header style={{backgroundColor:'white'}}>
          
          <Left>
            <Button transparent
            
            onPress={this.removeValueAndLogOut.bind(this)}
            
            >
              <Icon type='MaterialCommunityIcons' name={"logout"} style={{color:'#791AD9',fontSize:34}} />
            </Button>
           
          </Left>
          <Body>
            <Title style={[styles.shadowBtn,{width:182,color: '#791AD9',shadowColor:'#791AD9'}]}>සාදරයෙන් පිළිගනිමු</Title>
          
          </Body>
          <Right />
          
        </Header>
         
        <ImageBackground style={styles.top} source={require('../assets/136008.jpg')}>
        <Content style={{position:'relative',width:280,marginTop:15}}>
          <Item rounded style={{backgroundColor: '#F5F9FE'}}>
            <Input style={{fontWeight:'bold',color: 'black'}} placeholder='input salary :'
            keyboardType='numeric'
            value={this.state.inpuSalary} onChangeText={(value)=>{
              //    console.log(value);
                 this.setState({
                inpuSalary:value
                 });
             }}
            
            />
          </Item>
        </Content>
        <Content style={{position:'relative',width:280,marginTop:15}}>
          <Item rounded style={{backgroundColor: '#F5F9FE'}}>
            <Input style={{fontWeight:'bold',color: 'black'}} placeholder='spend :'
            keyboardType='numeric'
            value={this.state.spend} onChangeText={(value)=>{
              //    console.log(value);
                 this.setState({
                spend:value
                 });
             }}
            
            
            />
          </Item>
        </Content>
       
              <View style={{marginTop:40,justifyContent:'center',alignItems: 'center'}}>
              <Button rounded style={[styles.loginBtn,styles.shadowBtn,{shadowColor:'#791AD9'}]}
              
              onPress={this.generateSalary.bind(this)}
              onPressOut={this.arrayAdd.bind(this)}
              
              >
                  <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:17}}>generate now</Text>
              </Button>
          </View>
          <View style={styles.imageBttom}></View>


           



        </ImageBackground>
       


        <View style={styles.top1}></View>
        <View style={[styles.status1,{backgroundColor:'#EDEDED'}]} >
        <Text style={{fontWeight:'bold',fontSize:18}}>For You / Your Family : </Text>
        <Text style={{fontWeight:'bold',fontSize:18}}
        
        onPress={this.generateSalary.bind(this)}
        
        >
        {this.state.forYou}
        </Text>
        <Text style={{fontWeight:'bold',fontSize:18}}>//=LKR</Text>
        </View>  

        <View style={styles.top1}></View>
        

        <View style={[styles.status1,{backgroundColor:'#C7C4CA'}]}>
        <Text style={{fontWeight:'bold',fontSize:18}}>Bank Deposit : </Text>
        <Text style={{fontWeight:'bold',fontSize:18}}
        
        onPress={this.generateSalary.bind(this)}

        >{this.state.bank}</Text>
        <Text style={{fontWeight:'bold',fontSize:18}}>//=LKR</Text>
        </View> 
        
        <View style={styles.top1}></View>
        
        <View style={[styles.status1,{backgroundColor:'#8E8298'}]}>
        <Text style={{fontWeight:'bold',fontSize:18}}>Other Payment : </Text>
        <Text style={{fontWeight:'bold',fontSize:18}}
        
        onPress={this.generateSalary.bind(this)}

        >{this.state.otherPayment}</Text> 
        <Text style={{fontWeight:'bold',fontSize:18}}>//=LKR</Text>
        </View>  
        
        <View style={styles.top1}></View> 
         
        <View style={[styles.status1,{backgroundColor:'white'}]}>
      
        </View> 
       
        {/* <View style={styles.top1}></View>  */}
        
        <View style={styles.bottom1}>

       



        <LineChart

data={{
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data:[0,50] /*this.state.arrayWord*/
    }
  ]
}}


  // data={data}
  // width={screenWidth}
  // height={256}
  // verticalLabelRotation={30}
  // chartConfig={chartConfig}
  // bezier

  width={Dimensions.get("window").width} // from react-native
  height={220}
  yAxisLabel=""
  yAxisSuffix="%"
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "black",
    backgroundGradientTo: "white",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "black"
    }
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}




/>
          
          </View> 

       {/* <View>
    <Button success
     onPress={this.getData.bind(this)}
     ><Text> Save Data </Text></Button>
      </View> */}
      <View style={{ }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#791AD9' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon type='Entypo' name="upload"/>
            <Button style={{ backgroundColor: '#34A34F' }}
            
            onPressOut={this.storeData.bind(this)}
            
            >
              <Icon type='Foundation' name="folder-add" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}
            
            onPressOut={this.getGData.bind(this)}
            
            >
              <Icon type='MaterialCommunityIcons' name="database-refresh" />
            </Button>
            <Button style={{ backgroundColor: '#DD5144' }}
            
            onPress={this.removeValue.bind(this)}
            
            >
              <Icon type='MaterialCommunityIcons' name="delete-circle-outline" />
            </Button>
          </Fab>
        </View>
      </Container>
          </ScrollView> 
    );
  }
}

const styles=StyleSheet.create({
  brandViewText1:{
    color:'#4267b2',
    fontSize:18,
    fontWeight:'bold',
    textTransform: 'uppercase',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 15,
    textShadowColor: '#4267b2',
  },
  top:{
    flex:1,
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'red',

  },
  top1:{
    height:'1%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  imageBttom:{
    height:'5%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  status1:{
    height:'9%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
    // ,
    // backgroundColor: ''
  },
  bottom1:{
    height:'20%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  shadowBtn:{
    shadowOffset:{width:1,height:10},
    shadowOpacity:0.4,
    shadowRadius:3,
    elevation:15
},
loginBtn:{
  alignSelf: 'center',
  backgroundColor:'#791AD9',
  width:Dimensions.get('window').width/2,
  justifyContent:'center'
  },

  


})