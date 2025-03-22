import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Input = ({label, placeholder}) => {
  return (
    <View className="flex gap-1">
      <Text
        className="font-SemiBold"
        style={{fontSize: responsiveFontSize(1.7)}}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        className="border border-gray-400 rounded-md font-Regular px-5"
      />
    </View>
  );
};

export default Input;
