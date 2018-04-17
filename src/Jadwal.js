import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, Text, TouchableOpacity, TouchableHighlight, ActivityIndicator, RefreshControl } from 'react-native';

const logo = require('./img/logo.png');
const pti = require('./img/pti.jpg');

class Jadwal extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      isLoading: true,
      refreshing: false,
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    fetch('https://gusnando.com/dodik/api/listbooking.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          refreshing: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {

  return fetch('https://gusnando.com/mobile/dodik/api/listbooking.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

  renderRow(record) {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.row}>
         <View style={styles.info}>
          <Text style={styles.Title}>Id : {record.id}</Text>
          <Text style={styles.Title}>Nama : {record.nama}</Text>
          <Text style={styles.Details}>Tanggal : {record.tanggal}</Text>
          <Text style={styles.Details}>Jenis : {record.jenis}</Text>
         </View>
       
      </TouchableOpacity>
    );
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
      <View style={styles.mainContainer}>
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
              <TouchableOpacity style={styles.button}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Booking')}> BOOKING </Text></TouchableOpacity>
              <TouchableOpacity style={styles.button3}><Text style={{ fontSize: 10, color: 'black'}} onPress={() => this.props.navigation.navigate('Jadwal')}> JADWAL </Text></TouchableOpacity>
          </View>
        <View>
          <Text style={styles.title}>JADWAL : </Text>
        </View>

        <View style={styles.tampil}>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
   box1: {
    flex: 1.6,
    backgroundColor: '#192a56',        
  },
  box5: {
    flex: 0.3,
    backgroundColor: '#192a56',
  },
 tampil: {
    flex: 4,
  },
   tex1: {
    marginTop: 25,
    marginLeft: 5,
    //padding: 30, 
    fontSize: 20, 
    color: '#dcdde1'       
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
  icon: {
    //tintColor: '#fff',
    marginTop: 5,
    marginLeft: 5,
    height: 80,
    width: 80,
  },
  sider: {
    flex: 0.6,
    //marginTop: 3,
    //padding: 10,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginTop: 20,
    //marginLeft: 10,
    //marginRight: 10,
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
  title: {
    fontSize: 38,
    textAlign: 'center',
    marginTop: 20,
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
  },
  info: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 5,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  Details: {
    color: '#ccc',
    fontSize: 14,
  }
});

export default Jadwal;
