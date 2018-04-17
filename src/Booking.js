import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';

const logo = require('./img/logo.png');
const pti = require('./img/pti.jpg');

export default class App extends React.Component {
static navigationOptions = {
    header: null
  };

  constructor()
  {
      super();
      this.state = {
        nama: '',
        tanggal: '',
        jenis: '',
        ActivityIndicator_Loading: false,
      }
  }

  submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://gusnando.com/mobile/dodik/api/booking.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  tanggal : this.state.tanggal,
                  jenis : this.state.jenis,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  nama: '',
                  tanggal: '',
                  jenis: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }

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
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Utama')}> KOLEKSI FOTO </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Info')}> MORE INFO </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button3}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Booking')}> BOOKING </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}}onPress={() => this.props.navigation.navigate('Jadwal')}> JADWAL </Text></TouchableOpacity>
              
          </View>
          <View style={styles.box3}>
              <View style={styles.inputan}>
              <Text style={{ padding: 1, fontSize: 20, color: '#67e6dc', textAlign: 'center'}} >Nama :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Masukkan Nama Anda"
                  onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })}
                  value={this.state.nama}
              />
              </View>
          </View>
         <View style={styles.box4}>
              <View style={styles.inputan}>
              <Text style={{ padding: 1, fontSize: 20, color: '#67e6dc', textAlign: 'center'}} >Tanggal Yang Diinginkan :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Pastikan Pada Jadwal Tanggal Anda Tidak Sama Dengan Yang Lainnya"
                  onChangeText = {(TextInputText) => this.setState({ tanggal: TextInputText })}
                  value={this.state.tanggal}
              />
              </View>
              
          </View>
          
          <View style={styles.box7}>
              <View style={styles.inputan}>
              <Text style={{ padding: 1, fontSize: 20, color: '#67e6dc', textAlign: 'center'}} >Jenis Prewed :</Text>
              <TextInput
                  style={styles.isian}
                  placeholder="Contoh : Bali, Jawa, Moderen, DLL"
                  onChangeText = {(TextInputText) => this.setState({ jenis: TextInputText })}
                  value={this.state.jenis}
              />
              </View>
          </View>
          
          <View style={styles.box8}>
              <TouchableOpacity style={styles.button3} onPress={this.submitData}><Text style={{ fontSize: 10, color: 'black'}} >BOOKING</Text></TouchableOpacity>
          </View>

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
    flex: 2.6,
    backgroundColor: '#192a56',        
  },
  tex1: {
    marginTop: 25,
    marginLeft: 5,
    //padding: 30, 
    fontSize: 20, 
    color: '#dcdde1'       
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
    //marginTop: 5,
    marginLeft: 5,
    height: 120,
    width: 120,
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
    marginLeft: 10,
    marginRight: 10,
  },
  box8: {
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
 inputan: {
    backgroundColor: '#747d8c',
    flex: 2,
    margin: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  isian: {
    backgroundColor: '#fff',
    width: 1200,
    padding: 10,
    margin: 15,
    fontSize: 9,
  },
  text: {
    fontSize: 10
  },
});
