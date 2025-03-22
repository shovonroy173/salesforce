import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
const LoginScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <View className="flex-1 py-20 px-10 gap-20">
      <View>
        <Text className="font-SemiBold text-2xl text-center px-5">Welcome</Text>

        <Text className="font-SemiBold text-2xl text-center px-5">to</Text>
        <Text className="font-SemiBold text-2xl text-center px-5">Kazal Brothers Ltd.</Text>
      </View>
      <View className="flex gap-20">
        <View className="flex gap-10">
          <View className="flex gap-5">
            <View className="relative">
              <Ionicons
                name="person"
                size={24}
                className="absolute left-4 top-2"
              />
              <TextInput
                placeholder="Employee Id"
                className="border border-gray-400 rounded-md font-Regular px-14"
              />
            </View>
            <View className="relative">
              <MaterialIcons
                name="lock"
                size={24}
                className="absolute left-4 top-2"
              />
              <TextInput
                secureTextEntry={show ? false : true}
                placeholder="Password"
                className="border border-gray-400 rounded-md font-Regular px-14"
              />
              <TouchableOpacity
                onPress={() => setShow(!show)}
                className="absolute right-4 top-2">
                {show ? (
                  <Ionicons name="eye-outline" size={24} />
                ) : (
                  <Ionicons name="eye-off-outline" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Button title="Login" navigation={navigation} path="Register" />
        </View>

        <View className="flex flex-row gap-2 justify-center">
          <Text className="text-gray-500 font-Regular">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-[#6C5DD3] font-Bold">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
