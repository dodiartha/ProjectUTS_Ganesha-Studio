import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

const logo = require('../img/logo.png');
const pti = require('../img/pti.jpg');
const a6a = require('../img/6,a.png');

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
              <TouchableOpacity style={styles.button3}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Utama')}> GO BACK </Text></TouchableOpacity> 
          </View>
          <ScrollView style={styles.scrollView}>
              <View style={styles.box3}>
                <TouchableOpacity style={styles.iconContainer2}>
                  <Text style={{ fontSize: 26, color: 'white'}}> MODEREN </Text>
                  <Image source={a6a} style={styles.icon2} />
                  <Text style={{ fontSize: 26, color: 'white'}}> </Text>
                  <Text style={{ fontSize: 26, color: 'white'}}> DETAIL : </Text>
                  <Text style={{ fontSize: 26, color: 'white'}}>  </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> Harga 2,5 Juta </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> 1 Photographer dengan 1 Kamera Standar </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}> 1 Lokasi ( Hutan ) </Text>
                   <Text style={{ fontSize: 12, color: 'white'}}> 1X Rias + Pakaian Moderen </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}>  1 Foto 20R + 15 Foto Edit dalam 1 Album Ganesha Studio </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}>  1 DVD file Foto Edit & Original </Text>

                 <Text style={{ fontSize: 26, color: 'white'}}>  </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> Harga 5 Juta </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> 1 Photographer + 1 Asistant </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}> 2 Kamera Standar & 1 Kamera Infra Red </Text>
                   <Text style={{ fontSize: 8, color: 'white'}}> 2X Rias + Costum Moderen ( bebas pilihan ) + Costum Moderen ( bebas pilihan ) </Text>
                 <Text style={{ fontSize: 7, color: 'white'}}>  2 Lokasi Pemotretan ( Art Centre, Museum Bali, Bajra Sandhi, Mangrove & Pantai Tegalwangi  ) </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}>  1 Foto 20R + Frame Ukir </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}> 40 Foto Edit dalam 1 Album Ganesha Studio </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> 1 DVD file Foto Edit & Original </Text>
                   <Text style={{ fontSize: 12, color: 'white'}}> Sudah termasuk Transportasi </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> Belum termasuk Tiket masuk Lokasi </Text>

                   <Text style={{ fontSize: 26, color: 'white'}}>  </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> Harga 7,5 Juta </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> 1 Photographer + 1 Asistant </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}> 2 Kamera Standar & 1 Kamera Infra Red </Text>
                   <Text style={{ fontSize: 12, color: 'white'}}> 1 Orang Pengarah Gaya </Text>
                 <Text style={{ fontSize: 8, color: 'white'}}>  3-4 Buah pilihan Costum Moderen </Text>
                 <Text style={{ fontSize: 7, color: 'white'}}>  3-4 Lokasi Pemotretan ( Art Center, Museum Bali, Bajra Sandhi, Mangrove, Bedugul & Pantai Tegalwangi ) </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}> 2 Foto 20R + 2 Frame Ukir </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> 60 Foto Edit dalam 1 Album </Text>
                 <Text style={{ fontSize: 12, color: 'white'}}>  1 DVD file Foto Edit & Original </Text>
                   <Text style={{ fontSize: 12, color: 'white'}}> Sudah termasuk Transportasi </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> Belum termasuk Tiket masuk Lokasi & Biaya Makan</Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> BONUS Video Slideshow Foto Prewedding dalam 2 Lagu pilihan </Text>
                  <Text style={{ fontSize: 12, color: 'white'}}> Waktu pemotretan 12 Jam ( 1 Setengah Hari ) </Text>

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
    height: 320,
    width: 320,
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
    height: 1020,
    width: 1020,
  },
  sider: {
    flex: 0.5,
    marginTop: 3,
    //padding: 10,
    backgroundColor: '#57606f',
    //flexDirection: 'row',
    justifyContent: 'space-around',
   // alignItems: 'center',
    //marginTop: 20,
    //marginLeft: 10,
    //marginRight: 10,
  },

  box3: {
    flex: 12,
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
