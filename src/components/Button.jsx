import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, navigation, path}) => {
  const handleLogin = () => {
    console.log('Login button clicked');
    navigation.navigate(path);
  };
  return (
    <TouchableOpacity
      onPress={() => handleLogin()}
      className="bg-[#6C5DD3] rounded-md py-2.5">
      <Text className="text-white font-Medium text-center text-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
