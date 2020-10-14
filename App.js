import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const App = () => {
  const [number, setNumber] = useState('0');
  const [memory, setMemory] = useState(null);
  const [islem, setIslem] = useState(null);

  const changeNumber = (num) => {
    if (num == 'AC') {
      setNumber('0');
      setMemory(null);
      setIslem(null);
    } else if (number != '0') setNumber(number + num);
    else setNumber(num);
  };

  const changeNegative = () => {
    let num = parseFloat(number) * -1;
    setNumber(num.toString());
  };

  const yuzdeHesapla = () => {
    setNumber((number / 100).toString());
  };

  const ondalık = () => {
    if (number.includes('.')) return;

    setNumber(number + '.');
  };

  const islemSec = (isl) => {
    if (islem !== null) {
      if (memory == null) {
        setMemory(parseFloat(number));
      } else {
        if (islem === '+') {
          setMemory(memory + parseFloat(number));
        } else if (islem === '-') {
          setMemory(memory - parseFloat(number));
        } else if (islem === 'x') {
          setMemory(memory * parseFloat(number));
        } else if (islem === '/') {
          setMemory(memory / parseFloat(number));
        }
      }
    } else {
      setMemory(parseFloat(number));
    }
    setNumber('0');
    setIslem(isl);
  };

  const hesapla = () => {
    if (!islem) return;

    if (islem === '+') {
      setNumber((memory + parseFloat(number)).toString());
    } else if (islem === '-') {
      setNumber((memory - parseFloat(number)).toString());
    } else if (islem === 'x') {
      setNumber((memory * parseFloat(number)).toString());
    } else if (islem === '/') {
      setNumber((memory / parseFloat(number)).toString());
    }
    setMemory(null);
    setIslem(null);
    return;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: 20}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <Text style={{color: 'white', fontSize: 75, paddingHorizontal: 30}}>
          {number}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => changeNumber('AC')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNegative()}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => yuzdeHesapla()}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => islemSec('/')}>
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
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => changeNumber('7')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumber('8')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumber('9')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => islemSec('x')}>
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
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => changeNumber('4')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumber('5')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumber('6')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => islemSec('-')}>
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
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => changeNumber('1')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumber('2')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumber('3')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => islemSec('+')}>
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
        </TouchableOpacity>
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
        <TouchableOpacity onPress={() => changeNumber('0')}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ondalık()}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={() => hesapla()}>
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
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
