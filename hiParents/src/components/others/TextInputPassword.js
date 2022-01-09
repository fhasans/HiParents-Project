import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function TextInputPassword(props) {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState();

  return (
    <View
      style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderBottomColor: '#2F2F33',
          borderTopColor: 'white',
          borderLeftColor: 'white',
          borderRightColor: 'white',
          flexDirection: 'row',
          width: 350,
          marginBottom: 40,
          justifyContent: 'space-between',
          alignItems: 'center'
      ,
      }}>
      <TextInput
        placeholder={props.text}
        placeholderTextColor={props.plcColor}
        secureTextEntry={isOpen ? true : false}
        style={{
          fontSize: 18,
          color: 'black'
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={props.ChangeText}
      />
      <TouchableOpacity>
        <Icon
          // style={{ top: 30, height: 30}}
          size={20}
          color={isFocused ? 'grey' : 'grey'}
          onPress={() => setIsOpen(!isOpen)}
          name={isOpen ? 'eye-off' : 'eye'}
        />
      </TouchableOpacity>
    </View>
  );
}
