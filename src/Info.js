import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

const logo = require('./img/logo.png');
const pti = require('./img/pti.jpg');

export default class App extends React.Component {
 static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={styles.tex1} >GANESHA STUDIO</Text>
              <View style={styles.button1}>
              <View style={styles.iconContainer}>
              <Image source={logo} style={styles.icon} />
              </View>
              <Image source={pti} style={styles.icon} />
              </View>
          </View>
          <View style={styles.sider}>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Utama')}> KOLEKSI FOTO </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button9}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Info')}> MORE INFO </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Booking')}> BOOKING </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Jadwal')}> JADWAL </Text></TouchableOpacity>
              
          </View>

          <View style={styles.box2}>
              <View style={styles.button2}><Text> Telpon : (0362) ******* </Text></View>
          </View>

         <View style={styles.box3}>
              <View style={styles.button3}><Text> Whatsapp : 082-237-***-*** </Text></View>                 
          </View>

          <View style={styles.box4}>
              <View style={styles.button4}><Text> Facebook : Ganesha Studio </Text></View>        
          </View>

          <View style={styles.box5}>
              <View style={styles.button5}><Text> Instagram : @GaneshaStudio </Text></View>        
          </View>

          <View style={styles.box6}>
              <View style={styles.button6}><Text> Twiter : @GaneshaStudio </Text></View>
          </View>

          <View style={styles.box7}>
              <View style={styles.button7}><Text> Youtube : Ganesha Studio </Text></View>
          </View>

          <View style={styles.box8}>
              <View style={styles.button8}><Text> E-mail : GaneshaStudio@gmail.com</Text></View>
          </View>

          <View style={styles.box10}>
              <View style={styles.button10}><Text> Website : www.ganeshastudio.co</Text></View>
          </View>

          <View style={styles.box9}>
              <Text style={{ padding: 3, fontSize: 20, color: 'white', textAlign: 'center'}} >Copyright @DodiArtha</Text>
          </View>
               
      </View>
       );
      }
  }

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'black',
    flex: 1,
  },
  box1: {
    flex: 2.0,
    backgroundColor: '#192a56',        
  },
  tex1: {
    marginTop: 25,
    marginLeft: 5,
    fontSize: 20, 
    color: '#dcdde1'       
  },
  icon: {
    marginTop: 5,
    marginLeft: 5,
    height: 80,
    width: 80,
  },
  icon2: {
    //marginLeft: 5,
    height: 120,
    width: 1000,
  },
  button1: {
    width: 80,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'white',
    flexDirection: 'row'
  },
  button2: {
    width: 80,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
  sider: {
    flex: 0.5,
    marginTop: 3,
    backgroundColor: '#57606f',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box2: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  box3: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 10,
  },
  box4: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 10,
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 40,
    marginRight: 10,
  },
  box6: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 50,
    marginRight: 10,
  },
  box7: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 60,
    marginRight: 10,
  },
  box8: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 70,
    marginRight: 10,
  },
   box10: {
    flex: 0.7,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    marginLeft: 80,
    marginRight: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

button2: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button4: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button5: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button6: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button7: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button8: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
   button10: {
    width: 1000,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button9: {
    width: 100,
    height: 40,
    backgroundColor: '#1B9CFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box9: {
    flex: 0.6,
    backgroundColor: '#192a56',
  },
  text: {
    fontSize: 10
  },
});
