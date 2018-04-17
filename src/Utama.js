import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const logo = require('./img/logo.png');
const pti = require('./img/pti.jpg');
const a1 = require('./img/1.jpg');
const a2 = require('./img/2.jpg');
const a3 = require('./img/3.jpg');
const a3a = require('./img/3,a.jpg');
const a4 = require('./img/4.jpg');
const a5 = require('./img/5.jpg');
const a6 = require('./img/6.jpg');
const a6a = require('./img/6,a.png');
const a7 = require('./img/7.jpg');
const a8 = require('./img/8.jpg');
const a9 = require('./img/9.jpg');
const a10 = require('./img/10.jpg');
const a11 = require('./img/11.jpg');
const a12 = require('./img/12.jpg');
const a13 = require('./img/13.jpg');
const a14 = require('./img/14.jpg');

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={styles.tex1} >GANESHA STUDIO</Text>
              <View style={styles.button2}>
              <View style={styles.iconContainer}>
              <Image source={logo} style={styles.icon} />
              </View>
              <Image source={pti} style={styles.icon} />
              </View>
          </View>
          <View style={styles.sider}>
              <TouchableOpacity style={styles.button3}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Utama')}> KOLEKSI FOTO </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Info')}> MORE INFO </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Booking')}> BOOKING </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Jadwal')}> JADWAL </Text></TouchableOpacity>
              
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.box3}>
                <TouchableOpacity style={styles.iconContainer2}  onPress={() => this.props.navigation.navigate('gambar1')}>
                  <Image source={a1} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar2')}>  
                  <Image source={a2} style={styles.icon2} />
                </TouchableOpacity>
            </View>
           <View style={styles.box4}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar3')}>
                  <Image source={a3} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar4')}>
                  <Image source={a3a} style={styles.icon2} />
                </TouchableOpacity>
            </View>
            <View style={styles.box4}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar5')}>
                  <Image source={a4} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar6')}>
                  <Image source={a5} style={styles.icon2} />
                </TouchableOpacity>
            </View>
            <View style={styles.box4}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar7')}>
                  <Image source={a6} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar8')}>
                   <Image source={a6a} style={styles.icon2} />
                </TouchableOpacity>
            </View>
            <View style={styles.box4}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar9')}>
                  <Image source={a7} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar10')}>
                   <Image source={a8} style={styles.icon2} />
                </TouchableOpacity>
            </View>
             <View style={styles.box4}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar11')}>
                  <Image source={a9} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar12')}>
                   <Image source={a10} style={styles.icon2} />
                </TouchableOpacity>
            </View>
             <View style={styles.box4}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar13')}>
                  <Image source={a11} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar14')}>
                   <Image source={a12} style={styles.icon2} />
                </TouchableOpacity>
            </View>
            <View style={styles.box7}>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar15')}>
                  <Image source={a13} style={styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer2} onPress={() => this.props.navigation.navigate('gambar16')}>
                  < Image source={a14} style={styles.icon2} />
                </TouchableOpacity>
                
            </View>
          </ScrollView>
          <View style={styles.box5}>
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
    //padding: 14,
    //paddingTop: 14,
    //position: 'relative',
  },
  box1: {
    flex: 2.0,
    backgroundColor: '#192a56',        
  },
  tex1: {
    marginTop: 25,
    marginLeft: 5,
    //padding: 30, 
    fontSize: 20, 
    color: '#dcdde1'       
  },
  scrollView: {
    height: 350,
  },
  icon: {
    //tintColor: '#fff',
    marginTop: 5,
    marginLeft: 5,
    height: 80,
    width: 80,
  },
  icon2: {
    //tintColor: '#fff',
    marginTop: 10,
    marginLeft: 5,
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  button2: {
    width: 80,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'white',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    //backgroundColor: '#a4b0be',
    //borderColor: '#feaf12',
    //borderRadius: 15,
    //borderWidth: 1,
    justifyContent: 'center',
    height: 80,
    width: 80,
  },
  iconContainer2: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    //backgroundColor: '#a4b0be',
    //borderColor: '#feaf12',
    //borderRadius: 15,
    //borderWidth: 1,
    justifyContent: 'center',
    height: 120,
    width: 120,
  },
  sider: {
    flex: 0.5,
    marginTop: 3,
    //padding: 10,
    backgroundColor: '#57606f',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginTop: 20,
    //marginLeft: 10,
    //marginRight: 10,
  },

  box3: {
    flex: 2,
    backgroundColor: '#747d8c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  box8: {
    flex: 0.2,
    backgroundColor: '#747d8c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginTop: 3,
    //marginLeft: 10,
    //marginRight: 10,
  },

  box4: {
    flex: 2,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    //marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  box7: {
    flex: 2,
    backgroundColor: '#747d8c',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  button3: {
    width: 100,
    height: 40,
    backgroundColor: '#1B9CFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box5: {
    flex: 0.6,
    backgroundColor: '#192a56',
  },


  text: {
    fontSize: 10
  },
});
