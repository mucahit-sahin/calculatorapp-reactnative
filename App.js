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
  const [number2, setNumber2] = useState('0');
  const [islem, setIslem] = useState('');

  const changeNumber = (num) => {
    if (num == 'AC') {
      setNumber('0');
      setNumber2('0');
    } else if (number != '0') setNumber(number + num);
    else setNumber(num);
  };
  const changeNegative = () => {
    let num = parseFloat(number) * -1;
    setNumber(num.toString());
  };

  const islemSec = (islem) => {
    setIslem(islem);
    if (number2 == '0') {
      setNumber2(number);
      setNumber('0');
    } else {
      switch (islem) {
        case '+':
          setNumber((parseFloat(number2) + parseFloat(number)).toString());
          break;
        case '-':
          setNumber((parseFloat(number2) - parseFloat(number)).toString());
          break;
        case '/':
          setNumber((parseFloat(number2) / parseFloat(number)).toString());
          break;
        case '*':
          setNumber((parseFloat(number2) * parseFloat(number)).toString());
          break;
        default:
          break;
      }
    }
  };

  const hesapla = () => {
    if (islem != '') {
      switch (islem) {
        case '+':
          setNumber((parseFloat(number2) + parseFloat(number)).toString());
          break;
        case '-':
          setNumber((parseFloat(number2) - parseFloat(number)).toString());
          break;
        case '/':
          setNumber((parseFloat(number2) / parseFloat(number)).toString());
          break;
        case 'x':
          setNumber((parseFloat(number2) * parseFloat(number)).toString());
          break;
        default:
          break;
      }
    }
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
        <TouchableOpacity>
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
        <TouchableOpacity>
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
