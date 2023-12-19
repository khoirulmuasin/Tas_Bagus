import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1E272E' }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 5,
          paddingEnd: 1,
        }}>
          <Icon name="menu-outline" size={50} color="#FAD390" />
          <Icon name="notifications-outline" size={50} color="#FAD390" />
        </View>
        <Text style={{
          color: '#FAD390',
          padding: 5,
          paddingTop: 2,
          fontSize: 20,
        }}>HI, Bosss</Text>
        <View style={{
          backgroundColor: '#FAD390',
          width: 382,
          height: 102,
          borderRadius: 6,
          marginLeft: 5,
          marginTop: 27,
        }}>
          <Image style={{}}
            source={require('./src/img/7c1546f318144202b377edaa3306d22c.png')} />
        </View>
      </View >
    )
  }
}

export default App