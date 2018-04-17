import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Utama from './src/Utama';
import Info from './src/Info';
import Booking from './src/Booking';
import Jadwal from './src/Jadwal';
import gambar1 from './src/ket/gambar1';
import gambar2 from './src/ket/gambar2';
import gambar3 from './src/ket/gambar3';
import gambar4 from './src/ket/gambar4';
import gambar5 from './src/ket/gambar5';
import gambar6 from './src/ket/gambar6';
import gambar7 from './src/ket/gambar7';
import gambar8 from './src/ket/gambar8';
import gambar9 from './src/ket/gambar9';
import gambar10 from './src/ket/gambar10';
import gambar11 from './src/ket/gambar11';
import gambar12 from './src/ket/gambar12';
import gambar13 from './src/ket/gambar13';
import gambar14 from './src/ket/gambar14';
import gambar15 from './src/ket/gambar15';
import gambar16 from './src/ket/gambar16';

const RootStack = StackNavigator(
  
  {
    Utama: {
      screen: Utama,
    },
    Info: {
      screen: Info,
    },
    Booking: {
      screen: Booking,
    },
    Jadwal: {
      screen: Jadwal,
    },
   gambar1: {
      screen: gambar1,
    },
    gambar2: {
      screen: gambar2,
    },
    gambar3: {
      screen: gambar3,
    },
    gambar4: {
      screen: gambar4,
    },
    gambar5: {
      screen: gambar5,
    },
    gambar6: {
      screen: gambar6,
    },
    gambar7: {
      screen: gambar7,
    },
    gambar8: {
      screen: gambar8,
    },
    gambar8: {
      screen: gambar8,
    },
    gambar9: {
      screen: gambar9,
    },
    gambar10: {
      screen: gambar10,
    },
    gambar11: {
      screen: gambar11,
    },
    gambar12: {
      screen: gambar12,
    },
    gambar13: {
      screen: gambar13,
    },
    gambar14: {
      screen: gambar14,
    },
    gambar15: {
      screen: gambar15,
    },
    gambar16: {
      screen: gambar16,
    },
  },

  {
    initialRouteName: 'Utama',
  }

);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}