import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: 'white', fontSize: 60, paddingHorizontal: 30}}>
          32
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: 'lightgray',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>AC</Text>
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>+/-</Text>
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'black'}}>%</Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>/</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>7</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>8</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>9</Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>x</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>4</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>5</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>6</Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>-</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>1</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>2</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>3</Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>+</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 2 - 20,
            height: width / 4 - 20,
            borderRadius: width / 2 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>0</Text>
        </View>
        <View
          style={{
            backgroundColor: '#2a2a2a',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>.</Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            width: width / 4 - 20,
            height: width / 4 - 20,
            borderRadius: width / 4 - 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>=</Text>
        </View>
      </View>
    </View>
  );
}

export default App;
